import React from 'react';
import {
  TeacherItem,
  TeacherHeader,
  FooterTeacher
} from './styles'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

interface IProffy{
  proffyData: {
    avatar: string;
    proffyName: string;
    subject: string;
    description: string;
    priceHour: string;
  }
}

const TeacherItems: React.FC<IProffy> = (props) => {
  return(
    <TeacherItem>
          <TeacherHeader>
            <img src={props.proffyData.avatar} alt={props.proffyData.proffyName}/>
            <div>
              <strong>{props.proffyData.proffyName}</strong>
              <span>{props.proffyData.subject}</span>
            </div>
          </TeacherHeader>
          <p>
            {props.proffyData.description}
          </p>

          <FooterTeacher>
            <p>
              Preço/Hora
              <strong>R$ {props.proffyData.priceHour}</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
          </FooterTeacher>
        </TeacherItem>
  );
}

export default TeacherItems;