function WhoToFollowListItem(who) {
  const { avatarIcon, userName, handle } = who;
  return `
        <li class="list-group-item">
            <div class="row d-flex align-items-center">
                <div class="col-2">
                    <img src="${avatarIcon}" class="col-12 p-0 rounded-circle" />
                </div>
                <div class="col-6 col-xl-7">
                    <div class="fw-bold">
                        ${userName} <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div class="post-text-side">
                        @${handle}
                    </div>
                </div>
                <div class="col-4 col-xl-3">
                    <a class="btn btn-primary rounded-pill col-12">Follow</a>
                </div>
            </div>
        </li>
        `;
}

export default WhoToFollowListItem;
