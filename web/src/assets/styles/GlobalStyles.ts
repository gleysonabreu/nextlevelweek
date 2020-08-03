import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root{
    --color-background: #13111B;
    --color-primary-lighter: #9871F5;
    --color-primary-light: #916BEA;
    --color-primary: #8257E5;
    --color-primary-dark: #774DD6;
    --color-primary-darker: #6842C2;
    --color-secundary: #04D361;
    --color-secundary-dark: #04BF58;
    --color-title-in-primary: #FFFFFF;
    --color-text-in-primary: #D4C2FF;
    --color-text-title: #bfbfbf;
    --color-text-complement: #9C98A6;
    --color-text-base: #828282;
    --color-line-in-white: #201B2D;
    --color-input-background: #252131;
    --color-button-text: #FFFFFF;
    --color-box-base: var(--color-input-background);
    --color-box-footer: var(--color-input-background);

    font-size: 60%;
  }

  *{
    margin: 0;
    padding: 0%;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100vh;
  }

  body{
    background: var(--color-background);
  }

  #root{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, button, textarea {
    font: 500 1.6rem Poppins;
    color: var(--color-text-base);
  }

  @media(min-width: 700px){
    :root{
      font-size: 62.5%;
    }
  }

  .container{
    width: 90vw;
    max-width: 700px;
  }

`;

export default GlobalStyles;