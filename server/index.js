require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT || 6262;

const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.DATABASE_CONNECTION_URL, {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", (errr) => {
  console.log("xxxxxSERVERxxxxx");
  console.error(errr);
});
db.once("open", () => {
  console.log("====SERVER====\nDatabase connected.");
});

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.send("Nabasa by Paul Christian");
});


app.use("/api/books", require("./routes/books"));

// const accountsRouter = require("./routes/accounts");
// app.use("/account", accountsRouter);

// app.use((err, req, res, next) => {
//   res.status(500).send({
//     message: err.message,
//     stack: err.stack,
//   });
// });

app.listen(port, () => {
  console.log(`+++++PORT:${port}+++++`);
});
