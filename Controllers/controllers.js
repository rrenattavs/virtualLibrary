import Book from "../models/bookmodel.js";

export async function getAllBooks(req, res) {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: "No Books found" });
  }
  return res.status(200).json({ books });
}

export async function searchById(req, res) {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "The Book is not found" });
  }
  return res.status(200).json({ book });
}

export async function addABook(req, res) {
  const { title, author, plot, published, genre, available } = req.body;
  let book;
  try {
    book = new Book({
      title,
      author,
      plot,
      published,
      genre,
      available,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(500).json({ message: "Unable to add the book" });
  }
  return res.status(201).json({ book });
}

export async function changeABook(req, res) {
  const id = req.params.id;
  const { title, author, plot, published, genre, available } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      title,
      author,
      plot,
      published,
      genre,
      available,
    });
    book = await book.save();
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "Unable to update" });
  }
  return res.status(200).json({ book });
}

export async function removeABook(req, res) {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "The Book cannot be deleted" });
  }
  return res.status(200).json({ book });
}

export async function updateTitle(req, res) {
    const id = req.params.id;
    const { title } = req.body;
    try{
      let updateTitle = await Book.findByIdAndUpdate(id, {title});
      updateTitle = await updateTitle.save();
    }catch(err){
      console.log(err);
    }
    if (!updateTitle) {
      return res.status(404).json({ message: "Unable to update" });
    }
    return res.status(200).json({ updateTitle });
}

// export async function findSameAuthor(req, res){
//   const author = req.params.author;
//   try{
//     const allBooks = await Book.find({author})
//   }catch(err){
//     console.log(err);
//   }
//   if (!author) {
//     return res.status(404).json({ message: "Author not found" });
//   }
//   return res.status(200).json({title, author});

// }