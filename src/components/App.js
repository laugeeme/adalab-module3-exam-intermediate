/* eslint-disable no-useless-constructor */
import React from 'react';
import '../stylesheet/App.css';
import pokemons from '../data/pokemons.json';
import PokeList from './PokeList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      data:pokemons
    }

  }

  render() {
    console.log(this.state.data)
    return (
      
      <div className="App">

        <h1>Mi lista de Pokemon</h1>
        <PokeList dataList={this.state.data} />
      

      </div>
    );
  }
}

export default App;
