import React, { useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function CharacterList({characterData, setCharacterData}) {
  // TODO: Add useState to track data from useEffect
  // const [character, setCharacter] = useState([]);

  // const id = props.match.params.id;
  const characterUrl =  `https://rickandmortyapi.com/api/character/`;
  useEffect(() => {

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios.get(characterUrl)
    .then(response => {
        // debugger
        let characterFromAPI = response.data;
        setCharacterData(characterFromAPI);
         
    })
    .catch(err => {
        // debugger
        console.log(err.message);
    });
  }, []);

  return (
 characterData && (
    <section className="character-list grid-view">
      {characterData.results.map(char => (<CharacterCard data={char} key={char.id} />))}
    </section>
     )
  );
}
