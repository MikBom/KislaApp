// Navigate Between Screens using React Navigation in React Native //
// https://aboutreact.com/react-native-stack-navigation //
import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  Pressable,
  Linking,
} from 'react-native';

const kirjautuminen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            This is Second Page of the App
          </Text>
          <Button title="Takaisin" onPress={() => navigation.goBack()} />
          <Button
            title="Kirjaudu sisään"
            onPress={() =>
              navigation.navigate('kirjaudu', {someParam: 'Param1'})
            }
          />
          <Button
            title="Kotisivut"
            onPress={() => Linking.openURL('http://www.kisla.net/')}
          />

          <Button
            title="Etusivu"
            onPress={() => navigation.navigate('hakemisto')}
          />
          <Button
            title="Jäsenkortti"
            onPress={() => navigation.navigate('kortti', {someParam: 'Param1'})}
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          Navigate Between Screens using
          {'\n'}
          React Navigation
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default kirjautuminen;
