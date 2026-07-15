const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

const booksRoute = require("./routes/books");
app.use("/books", booksRoute);

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});