import React,{useEffect,useState} from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants,setPlants] = useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
      .then(r => r.json())
      .then(data => setPlants(data))
  })
  return (
    <ul className="cards">{plants.map(plant=>(
      <li key={plant.id}><PlantCard plant={plant}/></li>
    ))}</ul>
  );
}

export default PlantList;
