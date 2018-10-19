import mongoose from 'mongoose';

const Post = mongoose.model('Post', {
  title: String,
  content: String,
  author: String,
  active: { type: Boolean, default: true },
});

export default Post;
