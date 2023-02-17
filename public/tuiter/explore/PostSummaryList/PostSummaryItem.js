function PostSummaryItem(post) {
  const { topic, userName, time, image, title } = post;
  return `
        <li class="list-group-item post-text">
            <div class="row">
                <div class="col-10">
                    <div class="post-text-side">${topic}</div>
                    <div>
                        <span class="fw-bold">${userName} <i class="fa-solid fa-circle-check"></i></span>
                        <span class="post-text-side"> - ${time}</span>
                    </div>
                    <div class="fw-bold">${title}</div>
                </div>
                <div class="col-2">
                    <img class="col-12" src="${image}" />
                </div>
            </div>
        </li>`;
}

export default PostSummaryItem;
