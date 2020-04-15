import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

function PokeList(props) {
  return (
    <ul className="pokelist">
      {props.dataList.map((pokemonObject) => (
        <li className="pokemon" id={props.pokeId}>
        <Pokemon
          key={pokemonObject.id}
          pokeName={pokemonObject.name}
          pokeUrl={pokemonObject.url}
          pokeTypes={pokemonObject.types}
        />
        </li>
      ))}
    </ul>
  );
}


PokeList.propTypes ={
  pokeId: PropTypes.number,
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string,
};

export default PokeList;
