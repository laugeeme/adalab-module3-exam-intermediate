import React from 'react';
import Pokemon from './Pokemon';




function PokeList(props) {
    console.log(props)
    return (
      <ul className="pokelist">
        
         {props.dataList.map(pokemonObject =>
            <Pokemon 
                key = {pokemonObject.id}
                pokeName = {pokemonObject.name}
                pokeUrl = {pokemonObject.url}
                pokeTypes = {pokemonObject.types}
            
            />
            )} 


  
      </ul>
    );
  }



  export default PokeList;