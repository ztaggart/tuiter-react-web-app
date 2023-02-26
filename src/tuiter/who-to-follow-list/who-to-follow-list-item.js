import React from "react";
const WhoToFollowListItem = ({
  who = { userName: "NASA", handle: "NASA", avatarIcon: "nasa.png" },
}) => {
  return (
    <li className="list-group-item">
      <div className="row d-flex align-items-center">
        <div className="col-2">
          <img
            src={`/images/${who.avatarIcon}`}
            className="col-12 p-0 rounded-circle"
          />
        </div>
        <div className="col-6 col-xl-7">
          <div className="fw-bold">
            {who.userName} <i className="fa-solid fa-circle-check"></i>
          </div>
          <div className="post-text-side">@{who.handle}</div>
        </div>
        <div className="col-4 col-xl-3">
          <a className="btn btn-primary rounded-pill col-12">Follow</a>
        </div>
      </div>
    </li>
  );
};
export default WhoToFollowListItem;
