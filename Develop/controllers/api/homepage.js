const router = require('express').Router();
const sequelize = require('../../config/connection');
const app = express();


// Default route for any other url's
app.get("*", (req, res) => {
    res.send("PAGE NOT FOUND");
  });