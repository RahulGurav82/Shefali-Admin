import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  productId: String,
  userId: String,
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  comment: String,
  userName: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;