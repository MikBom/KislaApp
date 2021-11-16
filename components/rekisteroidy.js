import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from 'react-native';

const rekisteroidy = ({navigation}) => {
  const [name, SetName] = useState('');
  const [password, SetPassword] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View style={styles.title_view}>
          <Text style={styles.title}>Rekisteröidy</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}>Sähköpostiosoite:</Text>
          <TextInput
            style={styles.input}
            placeholder="esim. matti.mattila@gmail.com"
            onChangeText={value => SetName(value)}
          />
          <Text style={styles.text}>Valitse salasana:</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => SetPassword(value)}
          />
          <Text
            style={styles.button}
            /* Yhteys tietokantaan tähän
            onPress={() =>
              
            }*/
          >
            Rekisteröidy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title_view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    fontFamily: 'roboto-700',
    color: '#000000',
    fontSize: 18,
    textAlign: 'center',
  },
  title: {
    fontFamily: 'roboto-700',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 15,
  },
  button: {
    width: '90%',
    height: 41,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#E6E6E6',
    borderRadius: 36,
    fontFamily: 'roboto-700',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#121212',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default rekisteroidy;
