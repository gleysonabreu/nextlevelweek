import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import TextArea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../service/api';
import { PageTeacherForm, Main, Fieldset, Legend, Footer, ScheduleItem } from './styles'
import warningIcon from '../../assets/images/icons/warning.svg';
function TeacherForm(){
  const history = useHistory();

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ])

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);
  }

  function handleCreateClass(e: FormEvent){
    e.preventDefault();
    api.post('/classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then((response) => {
      alert('Cadastro realizado com sucesso!!');
      history.push("/");
    }).catch(() => {
      alert("Erro no cadastro.")
    })
  }

  function setScheduleItemValue(position: number, field: string, value: string){
    const newArraySchedule = scheduleItems.map((scheduleItem, index) => {
      if( index === position ){
        return {
          ...scheduleItem,
          [field]: value
        }
      }

      
      return scheduleItem;
    });
    setScheduleItems(newArraySchedule);
  }

  return(
    <PageTeacherForm className="container">
      <PageHeader
      title="Que incrível que você quer da aulas."
      description="O primeiro passo é preencher esse formulário de inscrição."
      />

      <Main>
        <form onSubmit={handleCreateClass}>
      <Fieldset>
          <Legend>Seus dados</Legend>
          <Input name="name"
          label="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}/>

          <Input name="avatar" label="Avatar"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}/>

          <Input name="whatsapp" label="Whatsapp"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}/>

          <TextArea name="bio" label="Biografia"
          value={bio}
          onChange={(e) => setBio(e.target.value)}/>
        </Fieldset>

        <Fieldset>
          <Legend>Sobre a aula</Legend>
          <Select
          name="subject"
          label="Matéria"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          options={[
            { value: 'Artes', label: 'Artes' },
            { value: 'Biologio', label: 'Biologio' },
            { value: 'Ciências', label: 'Ciências' },
            { value: 'Educação Física', label: 'Educação Física' },
            { value: 'Física', label: 'Física' },
            { value: 'Geografia', label: 'Geografia' },
            { value: 'História', label: 'História' },
            { value: 'Matemática', label: 'Matemática' },
            { value: 'Português', label: 'Português' },
            { value: 'Química', label: 'Química' },
          ]}
          />
          <Input name="cost" label="Custo da sua hora por aula"
          value={cost} onChange={(e) => setCost(e.target.value)}/>
        </Fieldset>

        <Fieldset>
          <Legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
          </Legend>

          {scheduleItems.map((item, index) => {
            return (
              <ScheduleItem key={item.week_day}>
                <Select
                name="week_day"
                label="Dia da semana"
                onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                value={item.week_day}
                options={[
                  { value: '0', label: 'Domingo' },
                  { value: '1', label: 'Segunda-feira' },
                  { value: '2', label: 'Terça-feira' },
                  { value: '3', label: 'Quarta-feira' },
                  { value: '4', label: 'Quinta-feira' },
                  { value: '5', label: 'Sexta-feira' },
                  { value: '6', label: 'Sabádo' },
                ]}
                />
                <Input value={item.from} onChange={e => setScheduleItemValue(index, 'from', e.target.value)} name="from" label="Das" type="time" />
                <Input value={item.to} onChange={e => setScheduleItemValue(index, 'to', e.target.value)} name="to" label="Até" type="time" />
          </ScheduleItem>
            );
          })}
        </Fieldset>

        <Footer>
          <p>
            <img src={warningIcon} alt="Aviso importante." />
            Importante! <br />
            Preencha todos os dados.
          </p>

          <button type="submit">Salvar cadastro</button>
        </Footer>
        </form>
      </Main>

    </PageTeacherForm>
  )
}

export default TeacherForm;