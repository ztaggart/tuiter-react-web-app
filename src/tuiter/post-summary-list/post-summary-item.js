const PostSummaryItem = (props) => {
  const { post } = props;
  return (
    <li class="list-group-item post-text">
      <div class="row">
        <div class="col-10">
          <div class="post-text-side">{post.topic}</div>
          <div>
            <span class="fw-bold">
              {post.userName} <i class="fa-solid fa-circle-check"></i>
            </span>
            <span class="post-text-side"> - {post.time}</span>
          </div>
          <div class="fw-bold">{post.title}</div>
        </div>
        <div class="col-2">
          <img class="col-12" src={post.image} />
        </div>
      </div>
    </li>
  );
};
export default PostSummaryItem;
