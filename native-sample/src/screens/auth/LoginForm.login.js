import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, MyInput, MyButton, MySpinner } from './common';

class LoginForm extends Component {

  render() {
    return (
      <Card>
        <CardSection>
          <MyInput
            label="Email"
            keyboardType="email-address"
            placeholder="email@gmail.com"
            value={this.props.email}
            onChangeText={(text) => this.onEmailChange.bind(this)(text)}
          />
        </CardSection>
        <CardSection>
          <MyInput
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.props.password}
            onChangeText={(text) =>
              this.onPasswordChange.bind(this)(text)}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>
          {this.renderButtonOrSpinner()}
        </CardSection>
      </Card>
    );
  }

  renderButtonOrSpinner() {
    if (this.props.loading) {
      return (
        <MySpinner size="large" />
      );
    } else {
      return (
        <MyButton
          text="Login"
          onPress={this.onButtonPress.bind(this)}
          color="#a0a"
        />
      );
    }
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser(email, password);
  }
}

const styles = {
  errorTextStyle: {
    alignSelf: "center",
    color: "red",
    fontSize: 20
  }
};

const mapStateToProps = state => {
  const { email, password, error, loading } = state.auth;
  return {
    email, password, error, loading
  };
};

export default connect(mapStateToProps,
    { emailChanged, passwordChanged, loginUser })(LoginForm);
