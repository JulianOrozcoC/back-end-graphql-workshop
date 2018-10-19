import Post from '../../mongoose/post';

// Get post ID by post Name
export const postID = async name => {
  const post = await Post.findOne({ name }, (err, doc) => {
    if (err) {
      console.log(err);
    }
    return doc;
  });
  return post._id;
};

const asyncCall = async () => {
  const firstPostId = await postID('This is the first post');
  const secondPostId = await postID('This is the second post');
  const thirdPostId = await postID('This is the third post');

  const comments = [
    {
      author: 'Miriam Cantero',
      content: 'Awesome Post!',
      postId: firstPostId,
      active: true,
    },
    {
      author: 'Ricardo Rodriguez',
      content: 'I really love the post!',
      postId: secondPostId,
      active: true,
    },
    {
      author: 'Julian Orozco',
      content: 'Very interesting!',
      postId: thirdPostId,
      active: true,
    }
  ];
  return comments;
}

export default asyncCall;