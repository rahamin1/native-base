import React from "react";
import { SafeAreaView, View, Image } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";

const routes = ["Drawer1", "Drawer2", "Drawer3"];

export default class Drawer extends React.Component {

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Content contentContainerStyle={{
            justifyContent: 'flex-start', marginTop: 30
            }}>
            {this.renderUsername()}
              <Image
                square
                style={{ height: 80, width: 70, marginLeft: 10 }}
                source={require('mypet/images/chats-icon.png')}
              />
            <List
              dataArray={routes}
              renderRow={data => {
                return (
                  <ListItem
                    button
                    onPress={() => this.props.navigation.navigate(data)}>
                    <Text>{data}</Text>
                  </ListItem>
                );
              }}
            />
          </Content>
        </Container>
      </SafeAreaView>
    );
  }

  renderUsername() {
    return (
      <View style={{ marginLeft: 10 }}>
        <Text>
          User:
        </Text>
      </View>
    );
  }
}

/*
const SideBar = (props) => (
  <View style={styles.container}>
    <View>
      <Text style={[styles.text,
        { fontSize: 30, textDecorationLine: 'underline' }]}>
        MENU
      </Text>
      <Text onPress={() => {
          //This is workaround to prevent loading first screen over and over
          const { state } = props.navigation;
          if (state.routes[0].routes[state.routes[0].routes.length - 1].routeName === 'Drawer1') {
            return null;
          }
          //End of workaround
          props.navigation.navigate('Drawer1');
        }}
        style={styles.text}>
        Go to First
      </Text>
      <Text onPress={()=>props.navigation.navigate('Drawer2')}
        style={styles.text}>Go to Second</Text>
      <Text onPress={()=>props.navigation.navigate('Drawer3')}
        style={styles.text}>Go to Third</Text>
    </View>
  </View>
);
*/
