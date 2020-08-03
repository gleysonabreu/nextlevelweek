import React, { useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItems from '../../components/TeacherItem';
import {
  PageTeacherList,
  SearchTeachers,
  InputBlock,
  Main
} from './styles'

interface IProffyProps{
  avatar: string;
  proffyName: string;
  subject: string;
  description: string;
  priceHour: string;
}

function TeacherList(){

  const [proffys, setProffys] = useState<IProffyProps[]>([]);

  useEffect(() => {
    setProffys([
      {
        avatar: 'https://avatars0.githubusercontent.com/u/27729455?s=460&u=573e7fef97ed11289cb8205c3d4b601cace0297c&v=4',
        proffyName: 'Gleyson Abreu',
        subject: 'Química',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ex maxime incidunt voluptatibus minima ratione, ut modi ducimus expedita! Aliquam qui corporis deserunt error obcaecati? Exercitationem hic laboriosam ex corporis!',
        priceHour: '80,00',
      },
      {
        avatar: 'https://avatars0.githubusercontent.com/u/27729455?s=460&u=573e7fef97ed11289cb8205c3d4b601cace0297c&v=4',
        proffyName: 'Jonatan Abreu',
        subject: 'Matemática',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ex maxime incidunt voluptatibus minima ratione, ut modi ducimus expedita! Aliquam qui corporis deserunt error obcaecati? Exercitationem hic laboriosam ex corporis!',
        priceHour: '80,00',
      }
      ,{
        avatar: 'https://avatars0.githubusercontent.com/u/27729455?s=460&u=573e7fef97ed11289cb8205c3d4b601cace0297c&v=4',
        proffyName: 'Ana Abreu',
        subject: 'Física',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ex maxime incidunt voluptatibus minima ratione, ut modi ducimus expedita! Aliquam qui corporis deserunt error obcaecati? Exercitationem hic laboriosam ex corporis!',
        priceHour: '80,00',
      }
      ,{
        avatar: 'https://avatars0.githubusercontent.com/u/27729455?s=460&u=573e7fef97ed11289cb8205c3d4b601cace0297c&v=4',
        proffyName: 'Gleyson Abreu',
        subject: 'Química',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ex maxime incidunt voluptatibus minima ratione, ut modi ducimus expedita! Aliquam qui corporis deserunt error obcaecati? Exercitationem hic laboriosam ex corporis!',
        priceHour: '80,00',
      },
      {
        avatar: 'https://avatars0.githubusercontent.com/u/27729455?s=460&u=573e7fef97ed11289cb8205c3d4b601cace0297c&v=4',
        proffyName: 'Gleyson Abreu',
        subject: 'Química',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ex maxime incidunt voluptatibus minima ratione, ut modi ducimus expedita! Aliquam qui corporis deserunt error obcaecati? Exercitationem hic laboriosam ex corporis!',
        priceHour: '80,00',
      }
    ])
  }, []);

  return(
    <PageTeacherList className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <SearchTeachers>
        <InputBlock>
            <label htmlFor='subject'>Matérias</label>
            <input type="text" id="subject"/>
          </InputBlock>
          <InputBlock>
            <label htmlFor='week_day'>Dia da semana</label>
            <input type="text" id="week_day"/>
          </InputBlock>
          <InputBlock>
            <label htmlFor='time'>Hora</label>
            <input type="text" id="time"/>
          </InputBlock>
        </SearchTeachers>
      </PageHeader>
    
      <Main>
        {proffys.map(proffy => (
          <TeacherItems proffyData={proffy} />
        ))}
      </Main>
    </PageTeacherList>
  )
}

export default TeacherList;