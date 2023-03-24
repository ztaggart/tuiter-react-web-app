import React from "react";
import TuitItem from "./tuit-item.js";
import { useSelector } from "react-redux";
const TuitsList = () => {
  const tuitsArray = useSelector((state) => state.tuits);
  return (
    <ul className="list-group">
      {tuitsArray.map((tuit) => {
        return <TuitItem key={tuit._id} tuit={tuit}></TuitItem>;
      })}
    </ul>
  );
};
export default TuitsList;
