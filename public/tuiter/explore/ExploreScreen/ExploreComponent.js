import PostSummaryList from "../PostSummaryList/index.js";

function ExploreComponent() {
  return `
    <div class="position-relative pb-2 row">
        <div class="col-11">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="search" class="rounded-pill form-control" placeholder="Search Tuiter" />
        </div>
        <div class="col-1 row p-0">
            <a href="#" class="d-grid align-items-center text-decoration-none"><i
                    class="fa-solid fa-gear text-primary"></i></a>
        </div>
    </div>
    <ul class="nav nav-tabs mb-2">
        <li class="nav-item">
            <a class="nav-link active" href="for-you.html">For you</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item d-none d-md-inline-block">
            <a class="nav-link" href="entertainment.html">Entertainment</a>
        </li>
    </ul>
    <div class="position-relative">
        <img src="../starship.webp" class="col-12" />
        <div class="position-absolute bottom-0 text-white image-text fw-bold">
            SpaceX's Starship
        </div>
    </div>
    ${PostSummaryList()}
  `;
}
export default ExploreComponent;
