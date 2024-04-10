import { model, Schema } from "mongoose";
const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [2, "Title must be at least 2 characters"],
      maxlength: [255, "Title must not exceed 255 characters"]
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      minlength: [5, "Author must be at least 5 characters"],
      maxlength: [255, "Author must not exceed 255 characters"]
    },
    pages: {
      type: String,
      required: [true, "Pages is required"],
      minlength: [1, "Pages must be at least 1 character"]
    },
    isAvailable: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);
const Book = model("Book", BookSchema)
export default Book
