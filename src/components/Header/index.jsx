import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import "./Header.css";

const Header = () => {
  let activeStyle = {
    borderBottom: "2px solid var(--blue)",
    padding: "4px 0",
    textAlign: "center",
    fontWeight: "bold",
    color: "var(--blue)",
    textDecoration: "none",
  };
  let button_menu = {
    color: "var(--white)",
    padding: "0 16px",
    textAlign: "center",
    fontWeight: "bold",
    textDecoration: "none",
  };

  return (
    <>
      <nav className="header_container">
        <Link to="/">
          <p>ALURAFLIX</p>
        </Link>
        <ul className="buttons_menu_container">
          <li className="li">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : button_menu)}
            >
              HOME
            </NavLink>
          </li>
          <li className="li">
            <NavLink
              to="/nuevo-video"
              style={({ isActive }) => (isActive ? activeStyle : button_menu)}
            >
              NUEVO VIDEO
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="tabBar">
        <Link to={"/"}>
          <FaHome />
        </Link>
        <Link to={"/nuevo-video"}>
          <div className="new_video_icon">
            <IoAddCircleOutline />
            <p>Nuevo Video</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export { Header };
