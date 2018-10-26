import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  Container, Content, Header, Body, Card, Title, Left, Right, Icon, Button, Text
} from 'native-base';

import styles from './styles';

export default class ForgottenPasswordScreen extends React.Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: '#961d10' },
    headerLeft: <Text onPress={() =>
      this.props.navigation.openDrawer()}>Menu</Text>,
    title: 'Login!',
    headerTintColor: 'white'
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container style={styles.container}>
          <Header style={styles.header}>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.openDrawer()}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Forgotten Password Screen</Title>
            </Body>
            {/* <Right /> */}
          </Header>

          <Content padder alignItems='center'>
            <Card alignItems='center'>
              <Button style={styles.button} danger onPress={() =>
                this.props.navigation.navigate('Welcome')}>
                <Text> Go to Welcome Tab </Text>
              </Button>
              <Button style={styles.button} warning onPress={() =>
                this.props.navigation.navigate('Main')}>
                <Text> Go to Main Tab </Text>
              </Button>
              <Button style={styles.button} success onPress={() =>
                this.props.navigation.openDrawer()}>
                <Text> Open Drawer </Text>
              </Button>
            </Card>
            <Card style={{ flexDirection: 'row' }}>
              <Button style={styles.button} info onPress={() =>
                this.props.navigation.navigate('Login')}>
                <Text>Login</Text>
              </Button>
              <Button style={styles.button} info onPress={() =>
                this.props.navigation.navigate('Signup')}>
                <Text>SignUp</Text>
              </Button>
              <Button style={styles.button} info onPress={() =>
                this.props.navigation.navigate('ForgottenPassword')}>
                <Text>Forgot</Text>
              </Button>
            </Card>
            <Card style={{ alignItems: 'center', marginTop: 50 }}>
              <Text style={{ fontSize: 30 }}>
                ForgottenPasswordScreen!
              </Text>
            </Card>
          </Content>
        </Container>
      </SafeAreaView>
    );
  }
}
