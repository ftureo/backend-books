// // CommonJS & ES6 modules

// // CommonJS - > ES6
// // Utiliza la palabra reservada require y además, se asigna a una constante
// const express = require('express');
// // Para exportar un módulo en CommonJS se utiliza module.exports
// // module.exports = function createServer() {}

// // ES6
// // Utiliza la palabra reservada import para importar un módulo
// import express from 'express';
// // Para exportar un módulo en ES6, por lo general, se utiliza export default
// // export default function createServer() {}

import express from 'express'
import fileUpload from 'express-fileupload'

import testRoutes from './routes/test.routes.js'
import booksRoutes from './routes/books.routes.js'
import userRoutes from './routes/users.routes.js'
import { createRoles } from './utils/roles.js'

const app = express()

// Middleware - Son funciones que se ejecutan antes de llegar a las rutas
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './tmp'
}))

createRoles()

app.use("/api", testRoutes)
app.use("/api", booksRoutes)
app.use("/api/auth", userRoutes)

export default app