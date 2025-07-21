const express = require("express");

const app = express();

//register view engine
app.set("view engine", "ejs");

//listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  //res.send("<p>Home page</p>");
  const blogs = [
    {
      title: "Yoshi find eggs",
      snippet: "Lorme ipsom dolor sit amet consectuiewrtete",
    },
    {
      title: "Mario find stars",
      snippet: "Lorme ipsom dolor sit amet consectuiewrtete",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorme ipsom dolor sit amet consectuiewrtete",
    },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  //res.send("<p>About page</p>");
  //res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new Blog" });
});

// //redirects
// app.get("/about-us", (req, res) => {
//   res.redirect("about");
// });

//404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
