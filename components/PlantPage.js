import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [ plantObj, setPlantObj ] = useState([])
  const [ search, setSearch ] = useState('')

  const filterSearch = plantObj.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(data => setPlantObj(data))
  }, [])

function addPlant(newPlant) {
  setPlantObj([...plantObj, newPlant])
}


  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search setSearch={setSearch}/>
      <PlantList plantObj={filterSearch}/>
    </main>
  );
}

export default PlantPage;
