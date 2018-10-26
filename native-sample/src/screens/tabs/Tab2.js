import React from "react";
import { SafeAreaView } from 'react-native';
import {
  Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem
} from "native-base";

import styles from './styles';

export default class Tab2 extends React.Component {
  static navigationOptions = {
    header: null
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
                <Title>Tab2</Title>
              </Body>
              <Right />
            </Header>

            <Content padder style={styles.content}>
              <Card>
                <CardItem>
                  <Left>
                  <Icon active name="ios-camera" />
                  <Text>Camera</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" onPress={() =>
                      this.props.navigation.navigate('Tab2EditItem')} />
                  </Right>
                </CardItem>
                <CardItem>
                  <Left>
                  <Icon active name="md-car" />
                  <Text>Car</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" onPress={() =>
                      this.props.navigation.navigate('Tab2EditItem')} />
                  </Right>
                </CardItem>
                <CardItem>
                  <Left>
                  <Icon active name="md-clock" />
                  <Text>Clock</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" onPress={() =>
                      this.props.navigation.navigate('Tab2EditItem')} />
                  </Right>
                </CardItem>
                <CardItem>
                  <Left>
                  <Icon active name="logo-googleplus" />
                  <Text>Google Plus</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" onPress={() =>
                      this.props.navigation.navigate('Tab2EditItem')} />
                  </Right>
                </CardItem>
                <CardItem>
                  <Left>
                  <Icon active name="logo-googleplus" />
                  <Text>Google Plus</Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" onPress={() =>
                      this.props.navigation.navigate('Tab2EditItem')} />
                  </Right>
                </CardItem>
              </Card>
            </Content>
          </Container>
        </SafeAreaView>
      );
    }
  }
