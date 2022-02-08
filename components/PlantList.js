import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantObj}) {

const plantList = plantObj.map((plant) => {return <PlantCard key={plant.id} id={plant.id} name={plant.name} image={plant.image} price={plant.price} /> } )



  return (
    <ul className="cards">{plantList}</ul>
  );
}

export default PlantList;
