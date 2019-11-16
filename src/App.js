import React from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>What's In My Fridge</h1>
      <FilterableProductTable products={props.data} />
    </div>
  );
}

export default App;
