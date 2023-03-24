import "./index.css";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faComment,
  faArrowsRotate,
  faHeart,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuits-reducer";

const TuitItem = (props) => {
  const { tuit } = props;
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <li className="list-group-item">
      <div className="d-flex">
        <img
          src={`/images/${tuit.image}`}
          className="rounded-circle me-3 wd-img-profile"
        />
        <div className="col-10">
          <div>
            <i
              className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(tuit._id)}
            ></i>
            <span className="fw-bold">{tuit.userName}</span>{" "}
            <FontAwesomeIcon icon={faCertificate} className="text-primary" />{" "}
            {tuit.handle + " - " + tuit.time}
          </div>
          <div>{tuit.tuit}</div>
          <div class="wd-bookmarked-post-icons">
            <div>
              <FontAwesomeIcon icon={faComment} />
              {" " + tuit.replies}
            </div>
            <div>
              <FontAwesomeIcon icon={faArrowsRotate} />
              {" " + tuit.retuits}
            </div>
            <div>
              <FontAwesomeIcon
                icon={faHeart}
                className={tuit.liked ? "text-danger" : ""}
              />
              {" " + tuit.likes}
            </div>
            <div>
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default TuitItem;
