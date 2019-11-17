import React from 'react';
import { render } from 'react-dom';
import App from './App';

import Products from './mocks/Products';

// sort by category and name
Products.sort((a, b) => {
  const cA = a.category.toUpperCase();
  const cB = b.category.toUpperCase();

  if(cA < cB) return -1;
  if(cA > cB) return 1;

  const nA = a.name.toUpperCase();
  const nB = b.name.toUpperCase();

  if(nA < nB) return -1;
  if(nA > nB) return 1;

  return 0;
});

render(<App data={Products} />, document.getElementById('root'));