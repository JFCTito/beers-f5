import axios from "axios";
import { useEffect, useState } from "react";

interface Beer {
  image_url: string;
  name: string;
  tagline: string;
  first_brewed: string;
  attenuation_level: number;
  description: string;
  contributed_by: string;
}

export const RandomBeerPage = () => {
  const [beer, setBeer] = useState<Beer | null>(null);
  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await axios.get(
          `https://f5-beers-065cad3017be.herokuapp.com/beers/random`
        );
        const data = await response.data;
        setBeer(data);
        console.log(data);
      } catch (error) {
        console.log("No se encuentra esa cerveza por su:", error);
      }
    };
    fetchBeer();
  }, []);
  if (!beer) {
    return <p>Cargando Cervezas...</p>;
  }
  return (
    <div>
      <img src={beer.image_url} width={100} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>Contributed By: {beer.contributed_by}</p>
    </div>
  );
};
