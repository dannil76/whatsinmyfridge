import React from 'react';
import { render } from 'react-dom';
import App from './App';

const PRODUCTS = [
  {
    name: 'Vetemjöl',
    category: 'Skafferi',
    stocked: true,
  },
  {
    name: 'Havregryn',
    category: 'Skafferi',
    stocked: true,
  },
  {
    name: 'Socker',
    category: 'Skafferi',
    stocked: false,
  },
  {
    name: 'Blandfärs',
    category: 'Kött',
    stocked: true,
  },
  {
    name: 'Nötfärs',
    category: 'Kött',
    stocked: false,
  },
  { 
    name: 'Fläskfilé',
    category: 'Kött',
    stocked: true,
  },
];

render(<App data={PRODUCTS} />, document.getElementById('root'));