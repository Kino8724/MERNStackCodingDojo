import { Router } from "express";
import { getAllBooks, createBook, deleteBook, updateBook, getBookByID } from "../controllers/book.controllers.js";

const router = Router()

router.route("/books")
.get(getAllBooks)
.post(createBook)

router.route("/books/:id")
.get(getBookByID)
.put(updateBook)
.delete(deleteBook)

export default router
