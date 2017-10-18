import React from 'react';
import ReactDOM from 'react-dom';

import Padrao, { Primeiro, Segundo } from './componente';

ReactDOM.render(
  <div>
    <Padrao />
    <Primeiro />
    <Segundo />
  </div>,
  document.getElementById('app')
);
