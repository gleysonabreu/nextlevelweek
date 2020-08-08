import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
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
  const [time, setTime] = useState('');

  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(res => {
      if(res){
        const favoritedProffys = JSON.parse(res);
        const favoritedProffysIds = favoritedProffys.map((proffy: IProffy) => proffy.id)
        setFavorites(favoritedProffysIds);
      }
    })
  }

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

            <TextInput
            placeholderTextColor="#c1bccc"
            value={subject}
            onChangeText={text => setSubject(text)}
            style={styles.input}
            placeholder="Qual a matéria"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>

                <TextInput
                placeholderTextColor="#c1bccc"
                value={week_day}
            onChangeText={text => setWeekDay(text)}
                style={styles.input}
                placeholder="Qual o dia?"
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>

                <TextInput
                placeholderTextColor="#c1bccc"
                value={time}
            onChangeText={text => setTime(text)}
                style={styles.input}
                placeholder="Qual o horário?"
                />
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