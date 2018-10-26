import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Drawer = (props) => (
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(103, 235, 148)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  },
  text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'rgb(43, 167, 85)'
  }
});

export default Drawer;
