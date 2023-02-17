const NavigationSidebar = () => {
  return `
    <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-brands fa-twitter"></i></a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-house"></i>
            <div class="d-none d-xl-inline-block">Home</div>
        </a>
        <a href="#" class="list-group-item list-group-item-action active">
            <i class="fa-solid fa-hashtag"></i>
            <div class="d-none d-xl-inline-block">Explore</div>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-bell"></i>
            <div class="d-sm d-none d-xl-inline-block">Notifications</div>
        </a>
        <a href="#" class="list-group-item list-group-item-action nav-text">
            <i class="fa-solid fa-envelope"></i>
            <div class="d-none d-xl-inline-block">Messages</div>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-bookmark"></i>
            <div class="d-none d-xl-inline-block">Bookmarks</div>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-list"></i>
            <div class="d-none d-xl-inline-block">Lists</div>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-user"></i>
            <div class="d-none d-xl-inline-block">Profile</div>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-ellipsis"></i>
            <div class="d-none d-xl-inline-block">More</div>
        </a>
        <a href="#" class="btn btn-primary rounded-pill mt-2">
            Tuit
        </a>
    </div>
    `;
};
export default NavigationSidebar;
