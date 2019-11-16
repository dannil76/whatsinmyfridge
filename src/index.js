import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';

const PRODUCTS = [
  {
    name: 'Football',
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
  },
  {
    name: 'Baseball',
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
  },
  {
    name: 'Basketball',
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
  },
  {
    name: 'iPod Touch',
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
  },
  {
    name: 'iPhone 5',
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
  },
  { 
    name: 'Nexus 7',
    category: 'Electronics',
    price: '$199.99',
    stocked: true,
  },
];

render(<App data={PRODUCTS} />, document.getElementById('root'));