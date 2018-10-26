import React from "react";
import { SafeAreaView, Image } from 'react-native';
import {
  Container, Header, Content, Card, CardItem, Thumbnail,
  Text, Button, Icon, Right, Left, Body, Title
} from 'native-base';

import styles from './styles';

export default class Tab3 extends React.Component {
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
              <Title>Tab3</Title>
            </Body>
            <Right />
          </Header>

            <Content>
              <Card style={{ flex: 0 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={require('mypet/images/robot-prod.png')} />
                    <Body>
                      <Text>NativeBase</Text>
                      <Text note>April 15, 2016</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Button transparent onPress={() =>
                      this.props.navigation.navigate('Tab3EditItem')}>
                      <Text>Edit</Text>
                    </Button>
                  </Right>
                </CardItem>
                <CardItem>
                  <Body>
                    <Image source={require('mypet/images/robot-prod.png')}
                      resizeMode='contain'
                      style={{ height: 100, flex: 1 }}/>
                    <Text>
                      //Your text here
                    </Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent textStyle={{ color: '#87838B' }}>
                      <Icon name="logo-github" />
                      <Text>1,926 stars</Text>
                    </Button>
                  </Left>
                </CardItem>
              </Card>

              <Card style={{ flex: 0 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={require('mypet/images/robot-prod.png')} />
                    <Body>
                      <Text>NativeBase</Text>
                      <Text note>April 15, 2016</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body>
                    <Image source={require('mypet/images/robot-prod.png')}
                      resizeMode='contain'
                      style={{ height: 100, flex: 1 }}/>
                    <Text>
                      //Your text here
                    </Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent textStyle={{ color: '#87838B' }}>
                      <Icon name="logo-github" />
                      <Text>1,926 stars</Text>
                    </Button>
                  </Left>
                </CardItem>
              </Card>
            </Content>
          </Container>
      </SafeAreaView>
    );
  }
}
