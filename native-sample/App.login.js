import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import firebase from 'firebase';
import RouterComponent from './src/Router';

class App extends Component {

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
    const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
