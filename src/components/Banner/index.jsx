import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner_container">
      <div className="banner_info">
        <h1>FRONTEND</h1>
        <h3>Challenge React</h3>
        <p>
          Este challenge es una forma de aprendizaje. Es un mecanismo donde
          podrás comprometerte en la resolución de un problema para poder
          aplicar todos los conocimientos adquiridos en la formación React.
        </p>
      </div>
      <div className="banner_image_container">
        <img src="img/player.png" alt="Banner image" />
      </div>
    </div>
  );
};

export { Banner };
