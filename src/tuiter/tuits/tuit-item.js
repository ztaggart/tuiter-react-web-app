import "./index.css";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faComment,
  faArrowsRotate,
  faArrowUpFromBracket,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { updateTuitThunk, deleteTuitThunk } from "../../services/tuits-thunks";

const TuitItem = (props) => {
  const { tuit } = props;
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
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
          <div className="wd-bookmarked-post-icons">
            <div>
              <FontAwesomeIcon icon={faComment} />
              {" " + tuit.replies}
            </div>
            <div>
              <FontAwesomeIcon icon={faArrowsRotate} />
              {" " + tuit.retuits}
            </div>
            <div>
              {tuit.likes}
              <i
                onClick={() => {
                  dispatch(
                    updateTuitThunk({
                      ...tuit,
                      likes: tuit.likes + 1,
                    })
                  );
                }}
                className="bi bi-heart-fill me-2 text-danger"
              ></i>
            </div>
            <div>
              {tuit.dislikes}
              <FontAwesomeIcon
                onClick={() => {
                  dispatch(
                    updateTuitThunk({
                      ...tuit,
                      dislikes: tuit.dislikes + 1,
                    })
                  );
                }}
                icon={faThumbsDown}
              />
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
