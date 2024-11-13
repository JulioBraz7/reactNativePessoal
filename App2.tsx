import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles2';
import images1 from './assets/site.png';
import images2 from './assets/opcoes.png';
import images3 from './assets/info.png';
import images5 from './assets/conf.png';
import images6 from './assets/insta.png';
import images7 from './assets/spotify.png';
import images8 from './assets/seta.png';
import images9 from './assets/tik.png';
import images10 from './assets/x.png';
import images11 from './assets/face.png';
import images12 from './assets/you.png';
import images13 from './assets/seta_esq.png';
import placeholderImage from './assets/lupa.png';

const DATA = [
  { id: '1', title: 'SITE OFICIAL', description: 'Confira todo o conteúdo do festival!', image: images1 },
  { id: '2', title: 'MAIS OPÇÕES', description: 'Tudo o que você procura!', image: images2 },
  { id: '3', title: 'INFORMAÇÕES', description: 'Tudo o que você precisa saber sobre o festival!', image: images3 },
  { id: '4', title: 'CONFIGURAÇÕES', description: 'Faça seus ajustes.', image: images5 },
  { id: '5', title: 'INSTAGRAM', description: 'Confira todo o conteúdo do festival!', image: images6 },
  { id: '6', title: 'SPOTIFY', description: 'Confira todo o conteúdo do festival!', image: images7 },
  { id: '7', title: 'TIKTOK', description: 'Confira todo o conteúdo do festival!', image: images9 },
  { id: '8', title: 'X', description: 'Confira todo o conteúdo do festival!', image: images10 },
  { id: '9', title: 'FACEBOOK', description: 'Confira todo o conteúdo do festival!', image: images11 },
  { id: '10', title: 'YOUTUBE', description: 'Confira todo o conteúdo do festival!', image: images12 },
];

const Item = ({ title, description, image }) => (
  <TouchableOpacity activeOpacity={0.7} style={styles.buttonSkill}>
    <Image source={image} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.textSkill}>{title}</Text>
      <Text style={styles.textSkill2}>{description}</Text>
    </View>
    <Image source={images8} style={styles.imageSeta} />
  </TouchableOpacity>
);

export default function App2() {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={images13} style={styles.imageSetaEsq} />
        <View style={styles.searchContainer}>
          <Image source={placeholderImage} style={styles.placeholderImage} />
          <TextInput
            selectionColor="#f72e82"
            style={styles.input}
            placeholder="O que deseja buscar no festival?"
            placeholderTextColor="#c7c1cd"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      </View>

      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} description={item.description} image={item.image} />}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
}
