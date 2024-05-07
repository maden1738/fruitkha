const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CreatedBySchema = new Schema({
     _id: { required: true, type: ObjectId, ref: "User" },
     name: {
          required: true,
          type: String,
     },
});

const NewsSchema = new Schema(
     {
          title: {
               required: true,
               type: String,
          },
          content: {
               required: true,
               type: String,
          },
          image: {
               type: String,
               required: true,
          },
          createdBy: CreatedBySchema,
     },
     { timestamps: true }
);

const NewsModel = mongoose.model("News", NewsSchema);

module.exports = NewsModel;
