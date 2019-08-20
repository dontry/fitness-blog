import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, injectGlobal} from 'styled-components'
import App from './App';
import theme from './theme'


injectGlobal`
  @font-face {
    font-family: 'EBGaramond';
    src: url('/assets/fonts/EBGaramond/EBGaramond-Bold.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'MissionGothic';
    src: url('/assets/fonts/MissionGothic/MissionGothic-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: "EBGaramond", "MissionGothic"  "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  p {  font-family: 'garamond'; }
`;

ReactDOM.render(
  <Provider theme={theme}>
<App />
</Provider>
, document.getElementById('root'));