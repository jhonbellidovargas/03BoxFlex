import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const FlexBoxScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja 1</Text>
      <Text style={styles.caja2}>Caja 2</Text>
      <Text style={styles.caja3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    //flexDirection: 'row',
    //flexDirection: 'column', --> default
    //flexDirection: 'row-reverse',
    //flexDirection: 'column-reverse',
    //justifyContent: 'center',
    // justifyContent: 'space-between',
    // justifyContent: 'flex-end',
    //justifyContent: 'space-around',
    //alignItems: 'stretch', --> default
    //alignItems: 'center',
    // alignItems: 'flex-end',
    alignItems: 'flex-start',
    // flex wrap
    flexWrap: 'wrap',
  },
  caja1: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    //alignSelf: 'center',
  },
  caja2: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    //alignSelf: 'flex-end',
  },
  caja3: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    //alignSelf: 'flex-start',
  },
});
