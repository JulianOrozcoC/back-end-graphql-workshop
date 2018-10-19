import mongoose from 'mongoose';

const Post = mongoose.model('Post', {
  author: String,
  title: String,
  body: String,
  active: { type: Boolean, default: true },
});

export default Post;
