import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import store from 'mypet/store/store';
import firebase from 'firebase';
import { AppLoading, Asset, Font } from 'expo';

import reducers from 'mypet/reducers';
import AppNavigator from 'mypet/navigation/AppNavigator';

export default class App extends Component {
  state = {
    isLoadingComplete: false
  };

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyAlWEJR8xFrbqkUKnEmD-sqOOpL6waJXf8",
      authDomain: "expo-manager-700b4.firebaseapp.com",
      databaseURL: "https://expo-manager-700b4.firebaseio.com",
      projectId: "expo-manager-700b4",
      storageBucket: "",
      messagingSenderId: "28697157854"
    };
    firebase.initializeApp(config);
  }

  render() {
    // const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      console.log("rendering AppLoading");
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      console.log("rendering Provider");
      return (
        <Provider store={store}>
            {/* }{Platform.OS === 'ios' && <StatusBar barStyle="default" />} */}
            {/* console.log("rendering AppNavigator") */}
            <AppNavigator />
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async() => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png')
      ]),
      Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
        // This is the font that we are using for our tab bar
        // ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
