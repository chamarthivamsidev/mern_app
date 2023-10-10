const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "./frontend/build")));

// Define your APIs here
// fetchItems api
app.get("/fetchItems", (req, res) => {
  res.json({
    items: [
      "Apple",
      "Banana",
      "Orange",
      "Strawberry",
      "Grape",
      "Watermelon",
      "Kiwi",
      "Blueberry",
      "Mango",
      "Pineapple",
      "Cherry",
      "Pear",
      "Lemon",
      "Lime",
      "Peach",
      "Plum",
      "Apricot",
      "Pomegranate",
      "Raspberry",
      "Blackberry",
    ],
  });
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
