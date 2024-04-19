import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    // toJSON: {
    //   transform: function (doc, post) {
    //     delete post.__v;
    //   },
    // },
  }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
