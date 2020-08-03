import styled from 'styled-components';

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-background);
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;
  img{
    height: 10rem;
  }

  h2{
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a{
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2.0rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--color-button-text);

    transition: background-color 0.2s;
  }

  a:first-child{
    margin-right: 1.6rem;
  }

  a img {
    width: 4rem;
    margin-right: 2.4rem;
  }

  a:first-child{
  background: var(--color-primary-lighter);

    &:hover{
      background: var(--color-primary-light);
    }
  }

  a:last-child{
  background: var(--color-secundary);
    &:hover{
      background: var(--color-secundary-dark);
    }
  }
`;

export const TotalConnections = styled.span`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;

  img{
    margin-left: 0.8rem;
  }
`;

export const PageLandingContent = styled.div`
  @media(min-width: 1100px){
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas: "logo hero hero" "buttons buttons total";

    ${LogoContainer}{
      grid-area: logo;
      text-align: left;
      align-self: center;
      margin:0;

      h2{
        text-align: initial;
        font-size: 3.6rem;
      }

      img{
        height: 100%;
      }
    }

    ${HeroImage}{
      grid-area: hero;
      justify-self: end;
    }

    ${ButtonContainer}{
      grid-area: buttons;
      justify-content: flex-start;

      a{
        font-size: 2.4rem;
      }
    }

    ${TotalConnections}{
      grid-area: total;
      width: 28rem;
      justify-self: flex-end;
    }
  }
`;
