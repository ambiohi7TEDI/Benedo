const express = require("express");
const ejs = require("ejs");

const userController = require("./controllers/userController");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.get("/users", userController.index);
app.get("/users/:id", userController.details);
app.get("/users/create", userController.create);
app.post("/users/", userController.store);
app.get("/users/edit/:id", userController.edit);
app.put("/users/:id", userController.update);
app.delete("/users/:id", userController.destroy);

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});
