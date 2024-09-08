'use client';

import { createGlobalStyle } from 'styled-components';

const ResetCSS = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body, div, span, h1, h2, h3, a, ol, li, table, tbody, thead, tr, th, td, article, section, nav {
    margin: 0;
    padding: 0;
    border: 0;
  }
  
  a {
    text-decoration: none;
  }
  
  ol, ul {
    list-style: none;
  }
  
  ::-webkit-scrollbar-thumb {
    width: 8px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #111111;
    border-radius: 8px;
  }
  
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #111111;
    border-radius: 10px;
  }
`;

export default ResetCSS;
