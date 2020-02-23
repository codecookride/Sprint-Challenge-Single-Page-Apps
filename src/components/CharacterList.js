import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm"

export default function LocationsList() {
    const [character, setCharacter] = useState([]);


useEffect(() => {
  
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacter(response.data.results);
        console.log(response.data.results);
      
       
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
  }, []);

 return(
     <div>
       <SearchForm characters={character}/>
              {character.map(characters => {
                 return <CharacterCard characters={characters} key={characters.id} />;
              })} 
              </div>
        )
};
