import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Dictionary.css';

// Free Dictionary API
// source: https://dictionaryapi.dev/

const Dictionary = () => {
  
  const[searchWord, setSearchWord] = useState("");
  const[wordMeaning, setWordMeaning] = useState("");
  const[loading, setLoading] = useState(true);

  const handleSubmit = ((e) => {
    e.preventDefault();

    setLoading(true);
    if(!searchWord) return;

    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
      .then((response) => response.data )
      .then((data) => { 
        const meaning = data[0]?.meanings[0].definitions[0].definition;
        setWordMeaning(meaning);
      })
      .catch((error) => {
        setWordMeaning('...výraz nebyl nalezen, zkuste to znovu'); 
      })
      .finally(() => setLoading(false) );

  });  


  /* -------------------------- */
  return <section className="dictionary">
    <h2>Významový slovník</h2>
    
    <form onSubmit={handleSubmit}>
      <input
        className="word-input"
        name="Hledané slovo"
        type="text"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        placeholder='Zadejte anglické slovo'
      />
      <br />
      <button 
        type="submit"
        className="word-button"
      >
        Vyhledej význam
      </button>
    </form>

    <div>
      { loading && searchWord && (
          <p>...data loading</p>
      )}
      { loading && !searchWord && (
          <p></p>
      )}
      { !loading && (
        <div>
          <p>První nalezený význam:</p>
          <p className="word-meaning">{wordMeaning}</p>
        </div>
      )}
    </div>

    <p className="back"><Link to="/" className="custom-link">Zpět</Link> na hlavní stránku.</p>  

  </section>
}

export default Dictionary