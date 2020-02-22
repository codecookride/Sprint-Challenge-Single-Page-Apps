import React from "react";

export default function LocationCard(props) {
  
  console.log(props);

  return (
    <div>
<ul>
  <li>Name:{props.characters.name}</li>
  </ul>
  <img src={props.characters.image} alt="nothing"/>
  </div>
  );
  
  
}
