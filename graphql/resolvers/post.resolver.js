import { objIdToString } from '../../lib/utils';

const post = (parent, args, { Post }) => Post.findById(args._id);

const posts = async (parent, args, { Post }) => {
  const results = await Post.find({ active: true }).sort({
    title: 'ASC',
  });
  return results.map(objIdToString);
};

const createPost = async (parent, args, { Post }) => {
  try {
    return await Post.create(args.input);
  } catch (error) {
    return error;
  }
};

const updatePost = async (parent, args, { Post }) => {
  try {
    return await Post.findByIdAndUpdate(args._id, args.input, {
      new: true,
    });
  } catch (error) {
    return error;
  }
};

const deletePost = async (parent, args, { Post }) => {
  try {
    const post = await Post.findById(args._id);
    post.active = false;
    post.save();
    return post;
  } catch (error) {
    return error;
  }
};

export default {
  Query: { post, posts },
  Mutation: { createPost, updatePost, deletePost },
};