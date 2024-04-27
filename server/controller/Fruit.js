const FruitModel = require("../model/Fruit");
const { uploadOnCloudinary } = require("../utils/cloudinary");

const getFruit = async (req, res, next) => {
     let searchTerm = req.query.searchTerm || "";
     let page = parseInt(req.query.page) || 1;
     let perPage = parseInt(req.query.perPage) || 6;

     try {
          const fruits = await FruitModel.find({
               name: RegExp(searchTerm, "i"),
          });
          const total = await FruitModel.find({
               name: RegExp(searchTerm, "i"),
          }).countDocuments();

          res.send({
               page,
               perPage,
               total,
               data: fruits,
          });
     } catch (error) {
          next(error);
     }
};

const postFruit = async (req, res, next) => {
     try {
          // console.log(req.user);
          if (!req.user.admin) return res.status(403).send("permission denied");

          const imagePath = req.file?.path;
          // console.log(imagePath);
          let image = null;
          if (imagePath) {
               image = await uploadOnCloudinary(imagePath);
          }
          const fruit = await FruitModel.create({
               ...req.body,
               image: image?.url || null,
          });
          res.send(fruit);
     } catch (error) {
          next(error);
     }
};

module.exports = {
     getFruit,
     postFruit,
};
