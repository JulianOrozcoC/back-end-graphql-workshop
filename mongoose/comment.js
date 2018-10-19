import mongoose from 'mongoose';

const { Schema } = mongoose;

const Comment = mongoose.model('Comment', {
  author: String,
  content: String,
  postId: { type: Schema.Types.ObjectId, ref: 'Post' },
  active: { type: Boolean, default: true },
});

export default Comment;
