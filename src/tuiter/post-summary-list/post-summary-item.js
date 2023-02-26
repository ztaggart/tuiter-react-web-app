const PostSummaryItem = (props) => {
  const { post } = props;
  return (
    <li className="list-group-item post-text">
      <div className="row">
        <div className="col-10">
          <div className="post-text-side">{post.topic}</div>
          <div>
            <span className="fw-bold">
              {post.userName} <i className="fa-solid fa-circle-check"></i>
            </span>
            <span className="post-text-side"> - {post.time}</span>
          </div>
          <div className="fw-bold">{post.title}</div>
        </div>
        <div className="col-2">
          <img className="col-12" src={`/images/${post.image}`} />
        </div>
      </div>
    </li>
  );
};
export default PostSummaryItem;
