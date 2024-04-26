import mongoose from "mongoose";

// Schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },

    // createdAt, updatedAt
  },
  {
    timestamps: true,
   
  }
);

const User = mongoose.model("User", userSchema);
export default User;
