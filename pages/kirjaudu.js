import * as React from 'react';
import {useState} from 'react';
import {
  Button,
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
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

          <Button
            title="Kirjaudu sisään"
            onPress={() =>
              navigation.navigate('ThirdPage', {someParam: 'Param1'})
            }
          />
        </View>

        <View style={styles.view}>
          <Text style={styles.text}>
            Jos sinulla ei ole vielä tunnuksia, rekisteröidy tästä.
          </Text>
        </View>

        <Button
          title="Rekisteröidy"
          onPress={() => navigation.navigate('rekisteroidy')}
        />
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
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    color: '#000000',
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  title: {
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
});

export default kirjaudu;
