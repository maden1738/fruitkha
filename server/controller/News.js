const NewsModel = require("../model/News");
const { uploadOnCloudinary } = require("../utils/cloudinary");

const getNews = async (req, res, next) => {
     let page = parseInt(req.query.page) || 1;
     let perPage = parseInt(req.query.perPage) || 6;

     try {
          const news = await NewsModel.find({})
               .limit(perPage)
               .skip((page - 1) * perPage);
          const total = await NewsModel.find({}).countDocuments();

          res.send({
               page,
               perPage,
               total,
               data: news,
          });
     } catch (error) {
          next(error);
     }
};

const postNews = async (req, res, next) => {
     try {
          if (!req.user.admin) return res.status(403).send("permission denied");
          const imagePath = req.file?.path;
          // console.log(imagePath);
          let image = null;
          if (imagePath) {
               image = await uploadOnCloudinary(imagePath);
          }
          const createdBy = {
               _id: req.user._id,
               name: req.user.name,
          };
          const news = await NewsModel.create({
               ...req.body,
               image: image?.url || null,
               createdBy,
          });
          return res.send(news);
     } catch (error) {
          next(error);
     }
};

module.exports = { getNews, postNews };
