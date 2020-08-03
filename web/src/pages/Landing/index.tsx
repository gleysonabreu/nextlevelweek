import React from 'react';
import { Link } from 'react-router-dom';
import {
  PageLanding,
  PageLandingContent,
  LogoContainer,
  ButtonContainer,
  HeroImage,
  TotalConnections
} from './styles';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

function Landing(){
  return (
    <PageLanding>
      <PageLandingContent className="container">
        <LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudo online.</h2>
        </LogoContainer>
        <HeroImage src={landingImg} alt="Plataforma de estudo."/>
        <ButtonContainer>
          <Link to='/study'>
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to='/give-classes'>
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </ButtonContainer>

        <TotalConnections>
          Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
        </TotalConnections>
      </PageLandingContent>
    </PageLanding>
  )
}

export default Landing;