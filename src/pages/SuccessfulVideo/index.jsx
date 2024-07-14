import { Link } from "react-router-dom";
import { MultimediaContext } from "../../Context";
import "./SuccesfulVideo.css";

import { useContext } from "react";

const SuccesfulVideo = () => {
  const { isSuccessful } = useContext(MultimediaContext);

  const renderSuccess = () => {
    return (
      <div id="success-box">
        <div className="message">
          <h1 className="alert h1">Éxito!</h1>
          <p className="p">Video añadido correctamente</p>
        </div>
        <Link to={"/"}>
          <button className="button-box button">
            <h2 className="volver h1">Volver al inicio</h2>
          </button>
        </Link>
      </div>
    );
  };

  const renderError = () => {
    return (
      <div id="error-box">
        <div className="message">
          <h1 className="alert h1">Error!</h1>
          <p className="p">Algo Salió mal</p>
        </div>
        <Link to={"/"}>
          <button className="button-box button">
            <h2 className="red h2">Inténtalo de nuevo</h2>
          </button>
        </Link>
      </div>
    );
  };

  const renderView = () => (isSuccessful ? renderSuccess() : renderError());

  return (
    <div className="form_result_container">
      <div className="messageSuccess_container">{renderView()}</div>
    </div>
  );
};

export { SuccesfulVideo };
