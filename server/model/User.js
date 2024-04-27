const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
     name: {
          required: true,
          type: String,
     },
     email: {
          required: true,
          type: String,
          validate: {
               validator: async function (requestValue) {
                    let user = await mongoose.models.User.findOne({
                         email: requestValue,
                    });
                    if (user) {
                         return false;
                    }
                    return true;
               },
               message: "Email already used",
          },
     },
     password: {
          required: true,
          type: String,
          select: false,
     },
     admin: {
          type: Boolean,
          default: false,
     },
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
