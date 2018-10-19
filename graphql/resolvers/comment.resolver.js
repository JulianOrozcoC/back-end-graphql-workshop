import { objIdToString } from '../../lib/utils';

const comment = (parent, args, { Comment }) => Comment.findById(args._id);

const comments = async (parent, args, { Comment }) => {
  const results = await Comment.find({ active: true }).sort({
    title: 'ASC',
  });
  return results.map(objIdToString);
};

const createComment = async (parent, args, { Comment }) => {
  try {
    return await Comment.create(args.input);
  } catch (error) {
    return error;
  }
};

const updateComment = async (parent, args, { Comment }) => {
  try {
    return await Comment.findByIdAndUpdate(args._id, args.input, {
      new: true,
    });
  } catch (error) {
    return error;
  }
};

const deleteComment = async (parent, args, { Comment }) => {
  try {
    const comment = await Comment.findById(args._id);
    comment.active = false;
    comment.save();
    return comment;
  } catch (error) {
    return error;
  }
};

export default {
  Query: { comment, comments },
  Mutation: { createComment, updateComment, deleteComment },
};