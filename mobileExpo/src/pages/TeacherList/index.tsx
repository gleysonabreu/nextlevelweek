import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, Picker, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { IProffy } from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import ErrorMessage from '../../components/ErrorMessage';

function TeacherList() {
  
  const [proffys, setProffys] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [message, setMessage] = useState('Use the filters to find yours proffys.');

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('00:00');
  const [showTime, setShowTime] = useState(false);


  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(res => {
      if(res){
        const favoritedProffys = JSON.parse(res);
        const favoritedProffysIds = favoritedProffys.map((proffy: IProffy) => proffy.id)
        setFavorites(favoritedProffysIds);
      }
    })
  }
  const onChange = async (event, selectedDate: Date) => {
    if(event.type === 'set'){
      const hour = selectedDate.getHours().toString();
      const minute = selectedDate.getMinutes().toString();
      const currentDate = `${hour}:${minute}`;
      setShowTime(false);
      setTime(currentDate);
    }else{
      setShowTime(false);
    }

  };

  function handleToggleFilterVisible() {
    setIsFiltersVisible(!isFiltersVisible)
  }

  async function handleSubmit(){
    loadFavorites();

    try {
      
      const response = await api.get('/classes', {
        params: {
          subject,
          week_day,
          time,
        }
      });
      setIsFiltersVisible(false);
      setProffys(response.data);

    } catch (error) {
      setProffys([]);
      setMessage(error.response.data.message);
    }
    
  }

  return (
  <View style={styles.container}>
    <PageHeader title='Proffys disponíveis'
    headerRight={(
      <BorderlessButton
      onPress={handleToggleFilterVisible}
      >
        <Feather name="filter" size={20} color='#fff' />
      </BorderlessButton>
    )}
    >
   {isFiltersVisible && ( 
    <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <Picker
            style={styles.input}
            selectedValue={subject}
            onValueChange={(subjectValue, subjectIndex) => {
              setSubject(subjectValue);
            }}
            >
              <Picker.Item label="Selecione uma máteria" value="" />
              <Picker.Item value='Artes' label='Artes' />
              <Picker.Item value='Biologio' label='Biologio' />
              <Picker.Item value='Ciências' label='Ciências' />
              <Picker.Item value='Educação Física' label='Educação Física' />
              <Picker.Item value='Física' label='Física' />
              <Picker.Item value='Geografia' label='Geografia' />
              <Picker.Item value='História' label='História' />
              <Picker.Item value='Matemática' label='Matemática' />
              <Picker.Item value='Português' label='Português' />
              <Picker.Item value='Química' label='Química' />
            </Picker>

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <Picker
                style={styles.input}
                selectedValue={week_day}
                onValueChange={(weekDayValue, weekDayIndex) => {
                  setWeekDay(weekDayValue);
                }}
                >
                  <Picker.Item label="Selecione um dia da semana" value="" />
                  <Picker.Item value='0' label='Domingo' />
                  <Picker.Item value='1' label='Segunda-feira' />
                  <Picker.Item value='2' label='Terça-feira' />
                  <Picker.Item value='3' label='Quarta-feira' />
                  <Picker.Item value='4' label='Quinta-feira' />
                  <Picker.Item value='5' label='Sexta-feira' />
                  <Picker.Item value='6' label='Sabádo' />
                </Picker>

              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>

                {/* <TextInput
                onFocus={() => {
                  console.log('clickei')
                }}
                placeholderTextColor="#c1bccc"
                value={time}
                style={styles.input}
                placeholder="Qual o horário?"
                /> */}
                <RectButton
                style={styles.input}
                onPress={() => {
                  setShowTime(true)
                }}
                >
                  <Text>{time}</Text>
                </RectButton>

                {showTime && (
                  <DateTimePicker
                    value={new Date()}
                    testID="dateTimePicker"
                    mode="time"
                    is24Hour
                    display='default'
                    onChange={onChange}
                  />
                )}
              </View>
   
            </View>
              <RectButton onPress={handleSubmit} style={styles.submit}>
                <Text style={styles.submitText}>Filtrar</Text>
              </RectButton>
          </View>
   )}
    </PageHeader>

    <ScrollView
    style={styles.teacherList}
    contentContainerStyle={{
      paddingHorizontal: 16,
      paddingBottom: 16
    }}
    >
      {
      proffys.length > 0 ?
        proffys.map((proffy: IProffy) => {
          return (
          <TeacherItem 
          key={proffy.id} 
          proffy={proffy}
          favorited={favorites.includes(proffy.id)}
          />);
        })
      : <ErrorMessage message={message} />
      }

    </ScrollView>
  </View>
  );
}

export default TeacherList;