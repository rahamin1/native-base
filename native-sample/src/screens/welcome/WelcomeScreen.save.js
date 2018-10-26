import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import {
  Container, Content, Header, Body, Title, Left, Right, Icon, Button, Text
} from 'native-base';

import Slides from 'mypet/components/Slides';
import styles from './styles';

const SLIDE_DATA = [
  { text: 'Welcome to Job App', color: '#00aced' },
  { text: 'Second and last welcome screen', color: '#64d448',
    buttonText: 'Press OK to exit welcome screens' }
];

export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: '#e51da2' },
    headerLeft: <Text onPress={() =>
      this.props.navigation.openDrawer()}>Menu</Text>,
    title: 'Welcome!',
    headerTintColor: 'white'
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container style={styles.container}>

          <Header>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.openDrawer()}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Welcome (see slides)</Title>
            </Body>
            {/* <Right /> */}
          </Header>

          <Content padder alignItems='center' style={styles.content}>
            <Button block style={styles.button} danger onPress={() =>
              this.props.navigation.navigate('WelcomeSlides')}>
              <Text>Go to Welcome with Slides</Text>
            </Button>
            <Button block style={styles.button} primary onPress={() =>
              this.props.navigation.navigate('Auth')}>
              <Text>Go to Login</Text>
            </Button>
            <Button block style={styles.button} warning onPress={() =>
              this.props.navigation.navigate('Main')}>
              <Text>Go to Main Tab</Text>
            </Button>
            <Button block style={styles.button} success onPress={() =>
              this.props.navigation.openDrawer()}>
              <Text>Open Drawer</Text>
            </Button>
            <View style={{ marginTop: 50, alignItems: 'center' }}>
              <Text style={{ fontSize: 30 }}>
                Welcome!
              </Text>
            </View>
          </Content>
        </Container>
      </SafeAreaView>
    );
  }
}
