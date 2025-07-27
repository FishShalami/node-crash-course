const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

//connect to mongo db
const dbURI =
  "mongodb+srv://fishshalami:Fishingmongo09175@cluster0.adptqh1.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(
    "mongodb+srv://fishshalami:Fishingmongo09175@cluster0.adptqh1.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(
    (
      result //listen for requests
    ) => app.listen(3000)
  )
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs");

//middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

//mongoose and mongo sandbox routes

app.get("/", (req, res) => {
  //res.send("<p>Home page</p>");
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  //res.send("<p>About page</p>");
  //res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

//blog routes
app.use("/blogs", blogRoutes);

//404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
