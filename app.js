const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const fetch = require("node-fetch");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));

app.get("/", async (req, res) => {
  res.render("index");
});

app.get("/index2", async (req, res) => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?sources=bbc-news&apikey=498b4450101d445bbba6f6d487cc695d"
  );
  const data = await response.json();
  const datas = data.articles;
  res.render("index2", { datas });
});
app.get("/link", async (req, res) => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=498b4450101d445bbba6f6d487cc695d"
  );
  const data = await response.json();
  const datas = data.articles;
  res.render("index3", { datas });
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("listening on 3000");
});
