import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from './styles';
import images0 from './assets/rockinrio.png';
import images1 from './assets/amazonia.png';
import images2 from './assets/perdidos.png';
import images3 from './assets/club26.png';
import images4 from './assets/login.png';
import images5 from './assets/pesquisa.png';
import images6 from './assets/onda.png';
import images7 from './assets/mais.png';
import gif from './assets/video.gif';
import App2 from './App2';

export default function App() {
  return (

    <View style={styles.container}>
      <ImageBackground source={gif} style={styles.gif}>
        <View style={styles.container2}>
          <Text style={styles.textGift1}>Bem-vindo ao</Text>
          <Image source={images4} style={styles.image4} />
        </View>

        <View style={styles.horizontalContainer}>
          <Image source={images0} style={styles.image0} />
        </View>

        <Text style={styles.textGift2}>ATÉ 2026!</Text>
      </ImageBackground>

      <TouchableOpacity activeOpacity={0.7} style={styles.buttonSkill}>
        <Image source={images1} style={styles.image} />
        <View>
          <Text style={styles.textSkill}>AMAZÔNIA PARA SEMPRE</Text>
          <Text style={styles.textSkill2}>Ver mais</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7} style={styles.buttonSkill}>
        <Image source={images2} style={styles.image} />
        <View>
          <Text style={styles.textSkill}>ACHADOS E PERDIDOS</Text>
          <Text style={styles.textSkill2}>Ver mais</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7} style={styles.buttonSkill}>
        <Image source={images3} style={styles.image} />
        <View>
          <Text style={styles.textSkill}>ROCK IN RIO CLUB 2026</Text>
          <Text style={styles.textSkill2}>Ver mais</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TouchableOpacity activeOpacity={0.7} style={styles.buttonSkillFooter}>
          <Image source={images6} style={styles.imageFooter} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={styles.buttonSkillFooter}>
          <Image source={images5} style={styles.imageFooter2} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={styles.buttonSkillFooter}>
          <Image source={images7} style={styles.imageFooter} />
        </TouchableOpacity>
      </View>

    </View>
  );
}
