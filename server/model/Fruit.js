const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FruitSchema = new Schema({
     name: {
          required: true,
          type: String,
          // validate: {
          //      // custom validation
          //      validator: async function (requestValue) {
          //           let fruit = await mongoose.models.Fruit.findOne({
          //                name: requestValue,
          //           });
          //           if (fruit) {
          //                return false;
          //           }
          //           return true;
          //      },
          //      message: "Fruit already exists",
          // },
     },
     price: {
          required: true,
          type: Number,
     },
     image: {
          type: String, // we only save image path
          default: null,
     },
});

const FruitModel = mongoose.model("Fruit", FruitSchema);

module.exports = FruitModel;
