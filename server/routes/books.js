const router = require("express").Router();
const Book = require("../models/book");

router.get("/:user", async (req, res) => {
  const { user } = req.params;
  try {
    const books = await Book.find({ user: user });
    res.status(200).send(books);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.status(200).send({ message: "Added successfully: " + newBook.title });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

router.delete("/:user/:bookId", async (req, res) => {
    const { user, bookId } = req.params;
    console.log(req.body)
  try {
    const deleteBook = await Book.deleteOne({ user: user, _id: bookId });
    res.status(200).send(deleteBook);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
