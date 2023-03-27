//the model schema
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.MONGO_URL);
const connectionString = process.env.MONGO_URL;

const db = await mongoose.connect(connectionString);

const bookSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true},
  author: {
    type: String,
    required: true
},
  plot: String,
  published: Number,
  genre: String,
  available: Boolean
});

const Book = db.model("book", bookSchema);

const books = await Book.find();


console.log(books);

console.log("Quantity of Books: ", books.length);

export default Book; //export a object, function or a main value

