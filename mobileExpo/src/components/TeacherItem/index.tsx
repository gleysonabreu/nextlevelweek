import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import api from '../../services/api';

export interface IProffy{
  id: number;
  avatar: string;
  name: string;
  subject: string;
  cost: number;
  bio: string;
  whatsapp: string;
}

interface IProffyProps {
  proffy: IProffy;
  favorited: boolean;
}

const TeacherItem: React.FC<IProffyProps> = ({ proffy, favorited }) => {

  const [isFavorited, setIsFavorited] = useState(favorited);

  async function handleLinkToWhatsapp(){
    await api.post('/connections', {
      user_id: proffy.id,
    });
    Linking.openURL('whatsapp://send?phone=5585997507271');

  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');
      
    let favoritesArray = [];
      if(favorites){
        favoritesArray = JSON.parse(favorites);
      }

    if(isFavorited){
      const favoriteIndex = favoritesArray.findIndex((proffyItem: IProffy) => {
        return proffyItem.id === proffy.id;
      });
      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
    }else{
      favoritesArray.push(proffy);
      setIsFavorited(true);
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
        style={styles.avatar}
        source={{ uri: `${proffy.avatar}` }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{proffy.name}</Text>
          <Text style={styles.subject}>{proffy.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        {proffy.bio}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {'   '}
          <Text style={styles.priceValue}>R$ {proffy.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
        <RectButton onPress={handleToggleFavorite} style={[styles.favoriteButton, isFavorited ? styles.favorited : {} ]}>
            { isFavorited ? <Image source={unFavoriteIcon} /> : <Image source={heartOutlineIcon} />}
          </RectButton>

          <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;