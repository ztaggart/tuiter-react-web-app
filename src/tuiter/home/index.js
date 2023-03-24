import { useEffect } from "react";
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = ({ setPage }) => {
  useEffect(() => {
    setPage("home");
  });
  return (
    <div>
      <h3>Home</h3>
      <WhatsHappening />
      <TuitsList />
    </div>
  );
};
export default HomeComponent;
