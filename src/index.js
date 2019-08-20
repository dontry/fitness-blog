import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'styled-components'
import App from './App';
import theme from './theme'

ReactDOM.render(
  <Provider theme={theme}>
<App />
</Provider>
, document.getElementById('root'));