import { createGlobalStyle} from 'styled-components'
import EBGaramond from './assets/fonts/EBGaramond/EBGaramond-Regular.woff2'
import EBGaramondBold from './assets/fonts/EBGaramond/EBGaramond-Bold.woff2'
import EBGaramondItalic from './assets/fonts/EBGaramond/EBGaramond-Italic.woff2'
import MissionGothic from './assets/fonts/MissionGothic/MissionGothic-Regular.woff2'
import MissionGothicBold from './assets/fonts/MissionGothic/MissionGothic-Bold.woff2'
import MissionGothicItalic from './assets/fonts/MissionGothic/MissionGothic-RegularItalic.woff2'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'EBGaramond';
    src: url(${EBGaramond}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'EBGaramond';
    src: url(${EBGaramondBold}) format('woff2');
    font-weight: bold;
    font-style: normal;
  }


  @font-face {
    font-family: 'EBGaramond';
    src: url(${EBGaramondItalic}) format('woff2');
    font-weight: normal;
    font-style: italic, oblique;
  }

  @font-face {
    font-family: 'MissionGothic';
    src: url(${MissionGothic}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'MissionGothic';
    src: url(${MissionGothicBold}) format('woff2');
    font-weight: bold;
    font-style: normal;
  }


  @font-face {
    font-family: 'MissionGothic';
    src: url(${MissionGothicItalic}) format('woff2');
    font-weight: normal;
    font-style: italic, oblique;
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
    font-family: "EBGaramond", "MissionGothic",  "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    text-decoration: none;
  }
  p {  font-family: 'garamond'; }
`;

export const breakpoints = ['374px', '1204px']
export const imageBreakpoints = {
  "landscapemobile1x": "374w",
  "landspacedesktop1x": "1204w"
}
export const avatarBreakpoints = {
 "square1x": "374w",
 "square2x": "1204w"
}



export default{
  "breakpoints":  breakpoints,
  "maxWidths": {
    "small": "374px",
    "md": "1204px",
  },
  "fonts": {
    "garamond": "EBGaramond",
    "gothic": "MissionGothic",
    "normal": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
},
  "fontWeights": {
    "light": 300,
    "normal": 400,
    "bold": 600
  },
  "colors": {
    "bodytext": "#24292e",
    "black": "#1b1f23",
    "white": "#fff",
    "gray": [
      "#fafbfc",
      "#f6f8fa",
      "#e1e4e8",
      "#d1d5da",
      "#959da5",
      "#6a737d",
      "#586069",
      "#444d56",
      "#2f363d",
      "#24292e"
    ],
    "blue": [
      "#f1f8ff",
      "#dbedff",
      "#c8e1ff",
      "#79b8ff",
      "#2188ff",
      "#0366d6",
      "#005cc5",
      "#044289",
      "#032f62",
      "#05264c"
    ],
    "green": [
      "#f0fff4",
      "#dcffe4",
      "#bef5cb",
      "#85e89d",
      "#34d058",
      "#28a745",
      "#22863a",
      "#176f2c",
      "#165c26",
      "#144620"
    ],
    "orange": [
      "#fff8f2",
      "#ffebda",
      "#ffd1ac",
      "#ffab70",
      "#fb8532",
      "#f66a0a",
      "#e36209",
      "#d15704",
      "#c24e00",
      "#a04100"
    ],
    "purple": [
      "#f5f0ff",
      "#e6dcfd",
      "#d1bcf9",
      "#b392f0",
      "#8a63d2",
      "#6f42c1",
      "#5a32a3",
      "#4c2889",
      "#3a1d6e",
      "#29134e"
    ],
    "red": [
      "#ffeef0",
      "#ffdce0",
      "#fdaeb7",
      "#f97583",
      "#ea4a5a",
      "#d73a49",
      "#cb2431",
      "#b31d28",
      "#9e1c23",
      "#86181d"
    ],
    "yellow": [
      "#fffdef",
      "#fffbdd",
      "#fff5b1",
      "#ffea7f",
      "#ffdf5d",
      "#ffd33d",
      "#f9c513",
      "#dbab09",
      "#b08800",
      "#735c0f"
    ],
    "state": {
      "error": "#d73a49",
      "failure": "#d73a49",
      "pending": "#dbab09",
      "queued": "#dbab09",
      "success": "#28a745",
      "unknown": "#959da5"
    },
  },
  "borders": [0, "1px solid"],
  "fontSizes": [12, 14, 16, 20, 24, 32, 40, 48],
  "lineHeights": {
    "condensedUltra": 1,
    "condensed": 1.25,
    "default": 1.5
  },
  "shadows": {
    "small": "0 1px 1px rgba(27, 31, 35, 0.1)",
    "medium": "0 1px 5px rgba(27, 31, 35, 0.15)",
    "large": "0 1px 15px rgba(27, 31, 35, 0.15)",
    "extra-large": "0 10px 50px rgba(27, 31, 35, 0.07)",
    "formControl": "rgba(27, 31, 35, 0.075) 0px 1px 2px inset",
    "formControlFocus": "rgba(3, 102, 214, 0.3) 0px 0px 0px 0.2em"
  },
  "space": [0, 4, 8, 12, 16, 24, 32, 36, 40, 48, 64, 80, 96, 112, 128]
}
