import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image, ScrollView, Linking, } from 'react-native';
import logo from '../assets/images/KISLAlogo.jpg';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../assets/colors/colors';

const Kortti = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
    <SafeAreaView>
    <View style={styles.menuWrapper}>

      {/* Ei käytössä, mustana */}
      <Feather
        name="menu"
        size={32}
        color={colors.black}
        style={styles.menuIcon}
        
      />
      <Image source={logo} style={styles.logoImage} />
    </View>
    <View style={styles.rect5}>
        <Text style={styles.kisla1Tulokset} 
        onPress={() => Linking.openURL('http://2005542mb.azurewebsites.net/kisla_login.php')}>
        Näytä kortti</Text>
      </View>
  </SafeAreaView>
  </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)"
  },
  etusivu: {
    top: 24,
    left: 6,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212"
  },
  logoImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  rect: {
    width: 331,
    height: 158,
    backgroundColor: "rgba(230,230, 230,1)",
    borderRadius: 15,
    marginTop: 200,
    alignSelf: "center"
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rect5: {
    width: 248,
    height: 41,
    backgroundColor: "#E6E6E6",
    borderRadius: 36,
    marginTop: 150,
    marginLeft: 50,
  },
  kisla1Tulokset: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 11,
    textAlign: "center",
  },

});

export default Kortti;
