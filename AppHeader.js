import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Dictionary App 2</Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'blue',
    height:50,
    marginTop:27
  },
  text:{
    color: 'white',
    padding: 10,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default AppHeader;