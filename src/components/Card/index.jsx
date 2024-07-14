import { useContext } from "react";
import "./Card.css";
import { IoTrashBinOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { MultimediaContext } from "../../Context";

const Card = ({
  title,
  image,
  deleteVideo,
  id,
  description,
  url,
  children,
}) => {
  const { openModal, openVideoDetail, setVideoToShow } =
    useContext(MultimediaContext);
  const showVideoDetail = (image, description, url, id) => {
    openVideoDetail();
    setVideoToShow({ image, description, url, id });
  };

  return (
    <>
      <div className="card_container">
        {children}
        <img
          src={image}
          alt="Image of the video"
          onClick={() => showVideoDetail(image, description, url, id)}
        />
        <div className="card_info">
          <div className="card_title">
            <p>{title}</p>
          </div>
          <div className="card_actions_container">
            <div
              className="action_card btn-borrar"
              onClick={() => deleteVideo(id)}
            >
              <IoTrashBinOutline />
              <p>BORRAR</p>
            </div>
            <div
              className="action_card btn-editar"
              onClick={() => openModal(id)}
            >
              <CiEdit />
              <p>EDITAR</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Card };
