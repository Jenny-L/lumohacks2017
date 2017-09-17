import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//jin - picture of sleeping baby for first slide (we should put picture underneath the title)
import React, {Component} from 'react';
import {AppRegistery, Image} from 'react-native';

export default class sleeping baby extends Component {
  render() {
    let pic = {
      uri: 'http://sites.psu.edu/siowfa15/wp-content/uploads/sites/29639/2015/10/baby.jpg'
    };
    return(
      <Image source={pic} style={{width:193, height: 110}}/>
    );
  }
}
