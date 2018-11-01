// transforms _id from an ObjectId into a string
const objIdToString = o => {
  o._id = o._id.toString();
  return o;
};

export { objIdToString };
