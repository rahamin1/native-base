import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();

    // AsyncStorage.removeItem('fb_token');
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps.token);
  }

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }

  onAuthComplete(token) {
    if (token) {
      this.props.navigation.navigate('map');
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);
