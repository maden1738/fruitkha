const UserModel = require("../model/User");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const getUser = async (req, res, next) => {
     try {
          const user = await UserModel.findById(req.params.id);
          res.send(user);
     } catch (error) {
          next(error);
     }
};

const signup = async (req, res, next) => {
     try {
          const hashedPassword = await bcrypt.hash(req.body.password, 10);
          const user = await UserModel.create({
               name: req.body.name,
               email: req.body.email,
               password: hashedPassword,
               admin: req.body.admin || false,
          });
          res.send(user);
     } catch (error) {
          next(error);
     }
};

const login = async (req, res, next) => {
     try {
          let user = await UserModel.findOne({
               email: req.body.email,
          }).select("+password");
          if (user) {
               let matched = await bcrypt.compare(
                    req.body.password,
                    user.password
               );
               if (matched) {
                    user = user.toObject();
                    const SECRET_KEY = process.env.ACCESS_TOKEN_SECRET;
                    var token = jwt.sign(user, SECRET_KEY);
                    return res.send({
                         user,
                         token,
                    });
               }
          }
          res.status(401).send("Invalid Credentials");
     } catch (error) {
          next(error);
     }
};

module.exports = { signup, login, getUser };
