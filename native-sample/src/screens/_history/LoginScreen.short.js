import React from 'react';
import { View } from 'react-native';
import {
  Container, Content, Header, Body, Card, Title, Left, Right, Icon, Button, Text
} from 'native-base';

import styles from './styles';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: '#961d10' },
    headerLeft: <Text onPress={() =>
      this.props.navigation.openDrawer()}>Menu</Text>,
    title: 'Login!',
    headerTintColor: 'white'
  };

  render() {
    return (
        <Container style={{ flex: 1, alignItems: 'center' }}>
          <Content padder alignItems='center'>
            <Card alignItems='center'>
              <Button style={{ margin: 10 }} danger>
                <Text> Go to Welcome Tab </Text>
              </Button>
              <Button style={{ margin: 10 }} warning>
                <Text> Go to Main Tab </Text>
              </Button>
              <Button style={{ margin: 10 }} success>
                <Text> Open Drawer </Text>
              </Button>
            </Card>
          </Content>
        </Container>
    );
  }
  }
