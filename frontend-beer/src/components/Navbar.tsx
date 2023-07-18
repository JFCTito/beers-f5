import { Link } from "react-router-dom";
import "../index.css";

export const Navbar = () => {
  return (
    <header className="header">
      <Link to="/">
        <nav className="navbar">
          {" "}
          <img src="home-logo.png" alt="" />{" "}
        </nav>
      </Link>
    </header>
  );
};
