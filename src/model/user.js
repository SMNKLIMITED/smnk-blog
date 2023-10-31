import mongoose, { Schema, models } from "mongoose";
import { number } from "yup";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    
   
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("Users", userSchema);
export default User;