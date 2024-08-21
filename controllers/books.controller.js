import fsExtra from "fs-extra"

import { uploadImageToCloudinary } from "../utils/cloudinary.js"
import Book from "../models/book.model.js"

// const transformBook = (book) => {
//     return {
//         bookId: book._id,
//         bookTitle: book.bookTitle,
//     }
// }

const getBooks = async (_request, response) => {
    const books = await Book.find()

    console.log({ books })

    response.json({
        message: "All books successfully fetched",
        // data: books.map((book) => transformBook(book))
        data: books,
        meta: {
            totalBooks: books.length
        }
    })
}
const getBookById = async (request, response) => {
    console.log(request.params)
    const { bookId } = request.params

    const book = await Book.findById(bookId)
    console.log({ book })

    if (!book) {
        return response.status(404).json({
            message: "Book not found",
            id: bookId
        })
    }

    response.json({
        message: "Get book by id controller",
        data: book
    })
}
const createBook = async (request, response) => {
    console.log(request.body)
    const { bookTitle, bookAuthor } = request.body
    let image

    if (request?.files?.bookImage) {
        const { bookImage } = request.files
        image = await uploadImageToCloudinary(bookImage.tempFilePath)

        image = {
            publicId: image.public_id,
            url: image.secure_url
        }
        await fsExtra.remove(bookImage.tempFilePath)
    }

    const newBook = new Book({
        bookTitle,
        bookAuthor,
        image
    })

    const newBookSaved = await newBook.save()
    console.log({ newBookSaved })

    console.log(request.files)
    response.json({
        message: "Book created successfully",
        newBookSaved
    })
    // response.send("Create book controller")
}
const updateBookByid = () => { }
const deleteBooks = () => { }
const deleteBookById = () => { }

export { getBooks, deleteBooks, getBookById, createBook, updateBookByid, deleteBookById }