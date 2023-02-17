import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

function WhoToFollowList() {
  return `
        <ul class="list-group">
            <li class="list-group-item">
                <div class="fw-bold">Who to follow</div>
            </li>
            ${who.map((follow) => WhoToFollowListItem(follow)).join("")}
        </ul>`;
}

// function whoToFollowComponent() {
//   $("#wd-whoFollow").append(`
//       ${WhoToFollowList()}
//      `);
// }
// $(whoToFollowComponent);
export default WhoToFollowList;
