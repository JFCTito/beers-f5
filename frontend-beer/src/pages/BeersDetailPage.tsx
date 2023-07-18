import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../index.css";
import axios from "axios";

interface Beer {
  image_url: string;
  name: string;
  tagline: string;
  first_brewed: string;
  attenuation_level: number;
  description: string;
  contributed_by: string;
}

export const BeersDetailPage = () => {
  const { beerId } = useParams();
  console.log(beerId);
  const [beer, setBeer] = useState<Beer | null>(null);
  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await axios.get(
          `https://f5-beers-065cad3017be.herokuapp.com/beers/${beerId}`
        );
        const data = await response.data;
        setBeer(data);
        console.log(data);
      } catch (error) {
        console.log("No se encuentra esa cerveza por su:", error);
      }
    };
    fetchBeer();
  }, [beerId]);
  if (!beer) {
    return <p>Cargando Cervezas...</p>;
  }
  return (
    <div className="container-center">
      <img
        className="beerImg"
        src={beer.image_url}
        height="400px"
        alt={beer.name}
      />
      <div className="detail-flex">
        <h2 className="beerName">{beer.name}</h2>
        <p className="level">Attenuation Level: {beer.attenuation_level}</p>
        <p className="tagline">{beer.tagline}</p>
        <p className="date">First Brewed: {beer.first_brewed}</p>
        <p className="description">{beer.description}</p>
        <p className="contributed">Contributed By: {beer.contributed_by}</p>
      </div>
    </div>
  );
};
