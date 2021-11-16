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
import rekisteroidy from './rekisteroidy';

const kirjaudu = ({navigation}) => {
  const [name, SetName] = useState('');
  const [password, SetPassword] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View style={styles.title_view}>
          <Text style={styles.title}>Kirjaudu tästä</Text>
        </View>

        <View style={styles.view}>
          <Text style={styles.text}>Tunnus:</Text>
          <TextInput
            style={styles.input}
            placeholder="esim. matti.mattila@gmail.com"
            onChangeText={value => SetName(value)}
          />

          <Text style={styles.text}>Salasana:</Text>
          <TextInput
            style={styles.input}
            onChangeText={value => SetPassword(value)}
          />
          <View>
            <Text
              style={styles.button}
              /* onPress={() =>
               yhteys tietokantaan tähän
            } */
            >
              Kirjaudu sisään
            </Text>
          </View>
        </View>

        <View style={styles.view}>
          <Text style={styles.text_small}>
            Jos sinulla ei ole vielä tunnuksia, rekisteröidy tästä.
          </Text>
          <View>
            <Text
              style={styles.button}
              onPress={() => navigation.navigate('rekisteroidy')}>
              Rekisteröidy
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Set styles
const styles = StyleSheet.create({
  title_view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    marginTop: 30,
    marginBottom: 30,
  },
  text: {
    fontFamily: 'roboto-700',
    color: '#000000',
    fontSize: 18,
    textAlign: 'center',
  },
  text_small: {
    fontFamily: 'roboto-700',
    color: '#000000',
    fontSize: 14,
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
    position: 'absolute',
    backgroundColor: '#E6E6E6',
    borderRadius: 36,
    fontFamily: 'roboto-700',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#121212',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default kirjaudu;
