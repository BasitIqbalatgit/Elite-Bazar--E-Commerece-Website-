import mongoose from "mongoose";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";

dotenv.config();
const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    // tokens: [
    //     {
    //         token: {
    //             type: String,
    //             required: true
    //         }
    //     }
    // ]
    quote: String
});

// userSchema.methods.generateAuthToken = async function () {
//     try {
//         let generatedToken = jwt.sign({ _id: this._id }, process.env.SECRETE_KEY);
//         this.tokens = this.tokens.concat({ token: generatedToken });
//         await this.save();
//         return generatedToken;
//     } catch (error) {
//         console.log(error);
//     }
// };

export const userModel = mongoose.model("user", userSchema);
