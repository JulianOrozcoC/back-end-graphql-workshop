import mongoose from 'mongoose';
var mongoSchema = mongoose.Schema;

const Comment = mongoose.model('Comment', {
  author: String,
  body: String,
  post: { type: mongoSchema.Types.ObjectId, ref: 'Post' },
  active: { type: Boolean, default: true },
});

export default Comment;
