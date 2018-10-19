import mongoose from 'mongoose';

const Comment = mongoose.model('Comment', {
  author: String,
  body: String,
  post: { type: Schema.Types.ObjectId, ref: 'Post' },
  active: { type: Boolean, default: true },
});

export default Comment;
