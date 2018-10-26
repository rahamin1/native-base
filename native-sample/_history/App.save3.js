import React, { Component } from 'react';
// import { Platform, StatusBar, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import store from 'mypet/store/store';

import firebaseInit from 'mypet/services/firebaseInit';

import { AppLoading, Asset, Font } from 'expo';

// import reducers from 'mypet/reducers';
import AppNavigator from 'mypet/navigation/AppNavigator';
import Loading from "mypet/components/Loading";

let persistor = persistStore(store);

const onBeforeLift = () => {
  // take some action before the gate lifts
  // (before rendering AppNavigator)
};

export default class App extends Component {
  state = {
    isLoadingComplete: false
  };

  componentDidMount() {
    firebaseInit();
  }

  // The following is for testing, when we want to start fresh
  purgeReduxStore() {
    console.error("Purging redux store - when we want to start fresh during testing");
    persistor.purge();
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
          <PersistGate
            loading={<Loading/>}
            onBeforeLift={onBeforeLift}
            persistor={persistor}>
            <AppNavigator />
          </PersistGate>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async() => {

    // this.purgeReduxStore();

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

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
*/
