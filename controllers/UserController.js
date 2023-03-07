require("dotenv").config();
const users = require("../src/mock/user.json");

const index = async (req, res) => {
  try {
    return res.json(users);
  } catch (error) {
    return res.json({ message: "Erro no servidor" });
  }
};

module.exports = { index };
