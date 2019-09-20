import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  console.log(character);

  // const id = props.match.params.id;
  const characterUrl =  `https://rickandmortyapi.com/api/character/`;
  useEffect(() => {


    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get(characterUrl)
    .then(response => {
        // debugger
        let characterFromAPI = response.data.results;
        console.log(characterFromAPI);
        setCharacter(characterFromAPI);
         
    })
    .catch(err => {
        // debugger
        console.log(err.message);
    });
  }, []);

  return (
    <section className="character-list grid-view">
      {character
      ? character.map(charac => <CharacterCard data={charac} key={charac.id} />)
      : null}
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
    </section>
  );
}
