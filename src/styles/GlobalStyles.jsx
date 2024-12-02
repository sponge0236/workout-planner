// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

export const lightTheme = {
    body: '#ffffff',
    text: '#000000',
};

export const darkTheme = {
    body: '#121212',
    text: '#ffffff',
};
