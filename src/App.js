import React, { useState } from 'react';
import Header from './components/Header.js';
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList.js';
import SearchForm from './components/SearchForm.js';
import axios from 'axios';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [characterData, setCharacterData] = useState(null);

  const onChange = e => {
    setSearchQuery(e.target.value);
  };

  const onSubmit = e => {
    const SearchUrl = `https://rickandmortyapi.com/api/character/?name=${searchQuery}`;
    e.preventDefault();
    
    axios.get(SearchUrl)
    .then(response => {
        // debugger
        let searchFromAPI = response.data;
        setCharacterData(searchFromAPI);     
    })
    .catch(err => {
        // debugger
        console.log(err.message);
    });
  };
  return (
    <main>
      <Header />
      
      <Route
        path="/characters"
        render={props => (
          <SearchForm onChange={onChange} onSubmit={onSubmit} query={searchQuery} />
        )}
      />
      <Route path="/" exact component={WelcomePage} />
      <Route
        path="/characters"
        render={props => (
          <CharacterList {...props} characterData={characterData}setCharacterData={setCharacterData} />
        )}
      />
    </main>
  );
}