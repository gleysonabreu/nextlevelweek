import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { IProffy } from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import ErrorMessage from '../../components/ErrorMessage';

function Favorites() {

  const [favorites, setFavorites] = useState([]);

  function loadFavorites(){
    AsyncStorage.getItem('favorites').then(res => {
      if(res){
        const favoritedProffys = JSON.parse(res);
        setFavorites(favoritedProffys);
      }
    })
  }

  useFocusEffect(() => {
    loadFavorites();
  })

  return (
  <View style={styles.container}>
    <View style={styles.container}>
      <PageHeader title='Meus proffys favoritos' />
    

    <ScrollView
    style={styles.teacherList}
    contentContainerStyle={{
      paddingHorizontal: 16,
      paddingBottom: 16
    }}
    >
      {
      favorites.length > 0 ?
        favorites.map((proffy: IProffy) => {
          return (
            <TeacherItem key={proffy.id} proffy={proffy} favorited={true} />
          )
        })
      : <ErrorMessage message="You have no favorite proffys.." />
      }
    </ScrollView>
    </View>
  </View>
  );
}

export default Favorites;