import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;

    @media screen and (max-width: 1200px) {
      font-size: 59.5%;
    }
    @media screen and (max-width: 992px) {
      font-size: 56.5%;
    }
    @media screen and (max-width: 768px) {
      font-size: 53.5%;
    }
    @media screen and (max-width: 576px) {
      font-size: 50.5%;
    }
    }

    html, body,#__next {
        height: 100%;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialised;
        transition: all 0.2s;
    }

    button {
        cursor: pointer;
    }

    a,
    a:active {
        color: inherit;
        text-decoration: none;
    }
`;

export default GlobalStyles;
