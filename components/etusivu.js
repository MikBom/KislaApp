import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import colors from '../assets/colors/colors';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import kuvadata from '../assets/data/kuvadata';
import {SafeAreaView} from 'react-native-safe-area-context';
import logo from '../assets/images/KISLAlogo.jpg';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

{
  /* Ladataan featherit ja entypot */
}
Feather.loadFont();
Entypo.loadFont();

{
  /* Etusivun määrittelyä */
}
const Etusivu = ({navigation}) => {
  {
    /* Kuvaosuuden määrittelyä, myöhemmin tulee lisää kuvista */
  }
  const kuvaosuus = ({item}) => {
    return (
      <ImageBackground
        source={item.image}
        style={[
          styles.kuvaItem,
          {
            marginLeft: item.id === 'kuva-1' ? 20 : 0,
          },
        ]}
        imageStyle={styles.kuvaItemImage}>
        <Text style={styles.kuvaItemText}>{item.title}</Text>
      </ImageBackground>
    );
  };

  return (
    <View style={styles.container}>
      {/* rullausominaisuus */}
      <ScrollView>
        {/* Yläosa */}
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            {/* Tämä mustana tällä hetkellä, tämän korvasi alapalkin navi joka helpompi ja siistimpi */}
            <Feather
              name="menu"
              size={32}
              color={colors.black}
              style={styles.menuIcon}
            />

            {/* Oikeen yläkulman logo */}
            <Image source={logo} style={styles.logoImage} />
          </View>
        </SafeAreaView>

        {/* Uutiset */}
        <View style={styles.kuvaWrapper}>
          <Text style={styles.kuvaTitle}>Uutiset</Text>
          <View style={styles.kuvaItemsWrapper}>
            <Text style={styles.uutisetTitle}>
              Tähän päivitetään uutisia. Oli tarkoitus tehdä feedi joka antais
              previewen ulkoiselle nettisivulle. Alapuolelle kuviin oli
              tarkoitus tehdä preview ikkuna someen, mutta on hiukan hankala
              toteuttaa. Joten tällä konseptilla etusivu.
            </Text>
          </View>
        </View>

        {/* Kuvat */}
        <View style={styles.kuvaWrapper}>
          <Text style={styles.kuvaTitle}>Kuvat</Text>
          <View style={styles.kuvaItemsWrapper}>
            <FlatList
              data={kuvadata}
              renderItem={kuvaosuus}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

{
  /* Tyylit */
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.black,
    backgroundColor: colors.black,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  kuvaWrapper: {
    marginTop: 50,
    paddingLeft: 20,
  },
  kuvaTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
  },
  uutisetTitle: {
    marginHorizontal: 20,
    fontFamily: 'Lato',
    fontSize: 14,
    color: colors.white,
  },
  kuvaItemsWrapper: {
    paddingVertical: 5,
  },
  kuvaItem: {
    width: 170,
    height: 180,
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  kuvaItemImage: {
    borderRadius: 20,
  },
  kuvaItemText: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

export default Etusivu;
