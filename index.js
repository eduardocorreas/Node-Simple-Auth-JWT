const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

//  Controllers
const AuthController = require("./controllers/AuthController");
const UserController = require("./controllers/UserController");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//  Routes
app.post("/auth/login", AuthController.signin);
app.post("/auth/user-logged", AuthController.userLogged);

app.get("/user", UserController.index);

const PORT = 3000;

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
