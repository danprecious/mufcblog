 const CommentList = ({ comments }) => {
  // console.log(comments)
  return (
    <div className="relative">
      <h1 className="text-[1.5rem] p-5 font-bold">Comments</h1>
      {comments.map((comment, index) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default CommentList;

const Comment = ({ comment }) => {
  return (
    <div className="py-5 px-5 w-full bg-bgShade my-3 rounded-md">
      <div className="w-full">{comment.content}</div>
      <div className="w-full">{comment.authorName}</div>
      <div></div>
    </div>
  );
};
