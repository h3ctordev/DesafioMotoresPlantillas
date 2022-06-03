const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", "./views");
app.set("view engine", "ejs");

// https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Camera-512.png
// https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Boot-512.png
// https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Backpack-512.png
// https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Gloves-512.png
// https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Hose-512.png
// https://cdn3.iconfinder.com/data/icons/spring-2-1/30/Fence-512.png

let products = [];

app.get("/", (req, res) => {
  res.render("pages/index.ejs", { title: "Formulario" });
});

app.get("/products", (req, res) => {
  res.render("pages/products.ejs", { products, title: "Productos" });
});

app.post("/products", (req, res) => {
  console.log("Body: ", req.body);
  products.push({ ...req.body });

  res.render("pages/products.ejs", { products, title: "Productos" });
});

app.listen(PORT, () => {
  console.log("Server running in: ", PORT);
});
