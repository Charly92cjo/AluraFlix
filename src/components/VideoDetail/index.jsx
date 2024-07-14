import { useContext } from "react";
import { MultimediaContext } from "../../Context";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./VideoDetail.css";
import { Link } from "react-router-dom";

const VideoDetail = () => {
  const { isAsideOpen, closeVideoDetail, videoToShow } =
    useContext(MultimediaContext);
  return (
    <>
      {isAsideOpen && (
        <aside className="video_detail">
          <div className="detail">
            <h2>Detalle</h2>
            <IoIosCloseCircleOutline onClick={closeVideoDetail} />
          </div>
          <figure className="video_image">
            <img src={videoToShow.image} alt={videoToShow.title} />
          </figure>
          <p className="video_description">{videoToShow.description}</p>
          <Link to={`http://localhost:5173/${videoToShow.id}`}>
            <button className="watch_video" onClick={closeVideoDetail}>
              Ver Video
            </button>
          </Link>
        </aside>
      )}
    </>
  );
};

export { VideoDetail };
