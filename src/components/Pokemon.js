import React from 'react';
import PropTypes from 'prop-types';

function Pokemon(props) {
  return (
    <div className="pokemonCard">
      <div className="pokemon-image">
        <img src={props.pokeUrl} alt={props.pokeName}></img>
      </div>

      <div className="pokemon-name">
        <h2>{props.pokeName}</h2>
      </div>

      <div className="pokemon-types">
        <ul className="type">
          {props.pokeTypes.map((pokeType) => (
            <li>{pokeType}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}


Pokemon.propTypes ={
  pokeName: PropTypes.string,
  id: PropTypes.number,
  pokeUrl: PropTypes.string,
}

export default Pokemon;
