class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }
  get(pos) {
    return this.items[pos];
  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }
  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.items.length;
  }
  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }
}

module.exports = SortedList;
const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.send("<h1>Home Page</h1>");
});

app.get("/about", (request, response) => {
  response.sendFile(`${__dirname}/views/about.html`);
});

app.get("/photogallery", (request, response) => {
  response.sendFile(`${__dirname}/views/about1.html`);
});

app.listen(3000, () => {
  console.log("Server listening on port: 3000");
});
