import React from 'react';
import {
  TeacherItem,
  TeacherHeader,
  FooterTeacher
} from './styles'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../service/api';

export interface IProffy{
    id: number;
    avatar: string;
    name: string;
    subject: string;
    cost: number;
    bio: string;
    whatsapp: string;
}

interface ITeacherItemProps {
  proffyData: IProffy;
}

const TeacherItems: React.FC<ITeacherItemProps> = ({ proffyData }) => {

  function createNewConnection() {
    api.post('/connections', {
      user_id: proffyData.id,
    })
  }
  return(
    <TeacherItem>
          <TeacherHeader>
            <img src={proffyData.avatar} alt={proffyData.name}/>
            <div>
              <strong>{proffyData.name}</strong>
              <span>{proffyData.subject}</span>
            </div>
          </TeacherHeader>
          <p>
            {proffyData.bio}
          </p>

          <FooterTeacher>
            <p>
              Preço/Hora
              <strong>R$ {proffyData.cost}</strong>
            </p>
            <a onClick={createNewConnection} target="_blank" href={`https://wa.me/${proffyData.whatsapp}`} >
              <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </a>
          </FooterTeacher>
        </TeacherItem>
  );
}

export default TeacherItems;