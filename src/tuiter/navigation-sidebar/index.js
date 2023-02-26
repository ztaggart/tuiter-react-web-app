import React from "react";
const NavigationSidebar = ({ active = "home" }) => {
  const isActive = (name) => {
    return active === name ? "active" : "";
  };
  return (
    <div className="list-group">
      <a className="list-group-item list-group-item-action">
        Tuiter <i class="fa-brands fa-twitter"></i>
      </a>
      <a
        className={`list-group-item ${isActive("home")} list-group-item-action`}
        Home
      ></a>
      <a
        className={`list-group-item ${isActive(
          "explore"
        )} list-group-item-action`}
      >
        Explore
      </a>
      <a
        className={`list-group-item ${isActive(
          "notifications"
        )} list-group-item-action`}
      >
        Notifications
      </a>
      <a
        className={`list-group-item ${isActive(
          "messages"
        )} list-group-item-action`}
      >
        Messages
      </a>
      <a
        className={`list-group-item ${isActive(
          "bookmarks"
        )} list-group-item-action`}
      >
        Bookmarks
      </a>
      <a
        className={`list-group-item ${isActive(
          "lists"
        )} list-group-item-action`}
      >
        Lists
      </a>
      <a
        className={`list-group-item ${isActive(
          "profile"
        )} list-group-item-action`}
      >
        Profile
      </a>
      <a
        className={`list-group-item ${isActive("more")} list-group-item-action`}
      >
        More
      </a>
    </div>
  );
};
export default NavigationSidebar;
