import React, { useState } from 'react';
import Axios from "axios";



export default function SearchForm(props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [character, setCharacter] = useState(null);

  const onChange = e => {
    setSearchQuery(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    Axios.get(
      `https://rickandmortyapi.com/api/character/?name=${searchQuery}`
    ).then(res => setCharacter(res.data));
  };

  return (
    <section className="search-form">
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          placeholder="Search"
          onChange={props.onChange}
          value={props.query}
        />
        <input type="submit" />
      </form>
    </section>
  );
}

