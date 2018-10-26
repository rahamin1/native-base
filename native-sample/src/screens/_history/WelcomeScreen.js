import React, { Component } from 'react';
import {
  View,

  // AsyncStorage,
  StyleSheet
} from 'react-native';
import { AppLoading } from 'expo';

import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to Job App', color: '#00aced' },
  { text: 'Set your location, then swipe away', color: '#64d448',
    buttonText: 'Press OK to exit welcome screens' }
];

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, firstExecution: true };
    this.checkFirstExecution = this.checkFirstExecution.bind(this);
  }

  componentDidMount() {

    // this.checkFirstExecution();
    // AsyncStorage.setItem('executed', 'already executed');
  }

  render() {

    /*
    if (this.state.isLoading) {
      return (
        <AppLoading />
      );
    }

    if (!this.state.firstExecution) {
      this.props.navigation.navigate('auth');
    }
    */

    return (
      <View style={styles.container}>
        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete.bind(this)}/>
      </View>
    );
  }

  onSlidesComplete() {
    this.props.navigation.navigate('main');
  }

  async checkFirstExecution() {
    let executed;
    try {

      // executed = await AsyncStorage.getItem('executed');
      this.setState({ isLoading: false, firstExecution: (executed === null) });
    } catch (error) {
      this.setState({ isLoading: false, firstExecution: true });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
