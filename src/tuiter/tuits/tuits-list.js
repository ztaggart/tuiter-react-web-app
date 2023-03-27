import React, { useEffect } from "react";
import TuitItem from "./tuit-item.js";
import { useDispatch, useSelector } from "react-redux";
import { findTuitsThunk } from "../../services/tuits-thunks.js";
const TuitsList = () => {
  const { tuits, loading } = useSelector((state) => state.tuitsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
    console.log(tuits);
  }, []);
  return (
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}
      {tuits.map((tuit) => {
        return <TuitItem key={tuit._id} tuit={tuit}></TuitItem>;
      })}
    </ul>
  );
};
export default TuitsList;
