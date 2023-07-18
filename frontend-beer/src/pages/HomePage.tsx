import { Link } from "react-router-dom";
// import Introduction from "../components/Introduction";
// import Greetings from "../components/Greetings";
import "../index.css";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit eget gravida cum sociis natoque penatibus et magnis.";

export const HomePage = () => {
  // const tito = {
  //   name: "tito",
  //   age: 36,
  //   married: false,
  // };
  return (
    <div className="container">
      <Link to="/beers">
        {" "}
        <img src="all-beers-img.png" alt="bar-image" />{" "}
      </Link>
      <Link to="/beers">
        {" "}
        <h2>All Beers</h2>{" "}
      </Link>
      <p>{lorem}</p>
      <Link to="/random-beer">
        {" "}
        <img src="random-beer-img.png" alt="beer dispenser image" />{" "}
      </Link>
      <Link to="/random-beer">
        {" "}
        <h2>Random Beer</h2>{" "}
      </Link>
      <p>{lorem}</p>
      <Link to="/new-beer">
        {" "}
        <img
          src="new-beer-img.png"
          alt="beer bottled served in a glass image"
        />{" "}
      </Link>
      <Link to="/new-beer">
        {" "}
        <h2>New Beer</h2>{" "}
      </Link>
      <p>{lorem}</p>
      {/* <Introduction {...tito} />
      <Greetings time="noches" name="Ariel" /> */}
    </div>
  );
};
