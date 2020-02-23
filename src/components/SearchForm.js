import React, { useState, useEffect } from "react";
import axios from "axios"

export default function SearchForm () {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState("woo");

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response => {
    
      
      const result = response.data.results.filter(character => {
        // if character (param) has a part of the searchTerm
        return character.characters.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
  
      setSearchResults(result);
    })
    .catch(error => {
      console.log("The data was not returned", error);
    });
 
}, [searchTerm]);

   
 


  const handleChange = event => {
    setSearchTerm(event.target.value);
  };


  return (
    <section className="search-form">
   <form>
        {/* We apply two-way data binding to the input field, which basically takes the value from the user and saves it into the state. */}
        {/* Two-way binding just means that:
        When properties in the state get updated, so does the UI.
        When UI elements get updated, the changes get propagated back to the state. */}
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
    
     <div>
     <ul>
     
     {searchResults.map(character => {
            return <li key={character}>{character}</li>;
          })}
     </ul>
   </div>
   </section>
    
  );
}
