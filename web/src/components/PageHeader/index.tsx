import React from 'react';
import {
  HeaderPage,
  TopBarContainer,
  HeaderContent
} from './styles';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface IProps {
  title: string;
}
const PageHeader: React.FC<IProps> = ({ title, children }) => {
  return(
      <HeaderPage>
        <TopBarContainer>
          <Link to='/'>
            <img src={backIcon} alt="Voltar" />
          </Link>
          <img src={logoImg} alt="Proffy" />
        </TopBarContainer>

        <HeaderContent>
          <strong>{title}</strong>
        {children}
        </HeaderContent>
      </HeaderPage>
  );
}

export default PageHeader;