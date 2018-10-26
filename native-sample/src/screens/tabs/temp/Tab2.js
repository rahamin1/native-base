import React from "react";
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
          <Card alignItems='center'>
            <CardItem>
              <Body>
                <Text>Tab2</Text>
              </Body>
            </CardItem>
          </Card>

          <Card alignItems='center'>
            <Button block rounded dark
              style={{ marginTop: 10 }}
              onPress={() => this.props.navigation.navigate("Tab2EditItem")}>
              <Text>Tab2 Edit Item</Text>
            </Button>
          </Card>

          <Card alignItems='center'>
            <CardItem>
              <Button block danger onPress={() =>
                this.props.navigation.navigate('Welcome')}>
                <Text> Go to Welcome Tab </Text>
              </Button>
            </CardItem>

            <CardItem>
              <Button block warning onPress={() =>
                this.props.navigation.navigate('Main')}>
                <Text> Go to Main Tab </Text>
              </Button>
            </CardItem>

            <CardItem>
              <Button block success onPress={() =>
                this.props.navigation.openDrawer()}>
                <Text> Open Drawer </Text>
              </Button>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }
}
