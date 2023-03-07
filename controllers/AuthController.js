require("dotenv").config();
var jwt = require("jsonwebtoken");
const users = require("../src/mock/user.json");

const signin = async (req, res) => {
  try {
    const user = users.filter(
      (user) => user.email === req.body.email && user.senha === req.body.senha
    )[0];
    if (user) {
      var token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
      delete user.password;
      return res.json({
        user,
        token,
      });
    } else {
      return res.json({
        message: "Usuário ou senha inválidos",
      });
    }
  } catch (error) {
    return error;
  }
};

const userLogged = async (req, res) => {
  try {
    const token = req.headers.token.split(" ");
    var decoded = jwt.verify(token[1], process.env.SECRET_KEY);
    console.log(decoded);
    const user = users.filter((u) => u.id === decoded.id);
    return res.json(user);
  } catch (error) {
    return res.json(error);
  }
};

module.exports = { signin, userLogged };
