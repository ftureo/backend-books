import { Router } from 'express'
import { getBooks, deleteBooks, getBookById, createBook, updateBookByid, deleteBookById } from '../controllers/books.controller.js'
import { verifyToken } from '../middlewares/users.middleware.js'

const router = Router()

router.get("/books", getBooks)
router.get("/books/:bookId", getBookById)
router.post("/create-book", verifyToken, createBook)
router.put("/update-book/:bookId", verifyToken, updateBookByid)
router.delete("/books", verifyToken, deleteBooks)
router.delete("/delete-book/:bookId", deleteBookById)

export default router