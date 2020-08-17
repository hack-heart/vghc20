import mongoose, { Schema } from 'mongoose';

const CommentSchema = new Schema({
  author: String,
  recruitingFor: String,
  text: String,
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: true,
});

const CommentModel = mongoose.model('Comment', CommentSchema);

export default CommentModel;
