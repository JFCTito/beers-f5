import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import axios from "axios";

interface Beer {
  _id: string;
  image_url: string;
  name: string;
  tagline: string;
  contributed_by: string;
}

export const AllBeersPage = () => {
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get(
          "https://f5-beers-065cad3017be.herokuapp.com/beers"
        );
        const data = await response.data;
        setBeers(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBeers();
  }, []);

  console.log(setBeers);

  return (
    <div className="container-center">
      {beers.map((beer) => (
        <ul className="beerItem" key={beer._id}>
          <li>
            <Link to={`/beers/${beer._id}`}>
              <img
                src={beer.image_url}
                style={{ height: "400px" }}
                alt="Beer Image"
              />
            </Link>
          </li>
          <li>
            <p>{beer.name}</p>
          </li>
          <li>
            <p>{beer.tagline}</p>
          </li>
          <li>
            <p>{beer.contributed_by}</p>
          </li>
          <li>
            <Link to={`/beers/${beer._id}`}>Details</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};
