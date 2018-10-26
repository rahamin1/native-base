import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';
import { Button } from 'native-base';

export default class ReviewScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight: (
       <Button title="Settings"
         onPress = {() => navigation.navigate('settings')}
         backgroundColor="rgba(0,0,0,0)"
         color="rgba(0,122,255,1)"
      />
    ),
    style: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
