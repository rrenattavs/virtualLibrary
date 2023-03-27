import express from "express";
import {
  getAllBooks,
  addABook,
  searchById,
  changeABook,
  removeABook,
  updateTitle,
  // findSameAuthor
} from "../Controllers/controllers.js";

export const router = express.Router();

//call all functions in the file "data.js"
router.get("/", getAllBooks); //overview all the books
router.post("/", addABook); //add a new Book
router.get("/:id", searchById); //Search by ID
router.put("/:id", changeABook); //find the book's ID and change it
router.delete("/:id", removeABook); //Delete the book by ID
router.patch("/:id", updateTitle); //Update by Title
// testRouter.get("/author", findSameAuthor)

