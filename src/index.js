import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'styled-components'
import App from './App';
import theme, {GlobalStyle} from './theme'


ReactDOM.render(
  <Provider theme={theme}>
    <GlobalStyle />
<App />
</Provider>
, document.getElementById('root'));