import React from 'react';
import {StyleSheet, View} from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    // Tarea 1 ok
    // Tarea 2 ok
    //justifyContent: 'center',
    // Tarea 3
    //justifyContent: 'center',
    // Tarea 4
    justifyContent: 'space-between',
    // Tarea 5 ok
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // Tarea 6 ok
    // Tarea 7 ok
    // alignItems: 'center',
    // justifyContent: 'center',
    // Tarea 8 ok
    // alignItems: 'center',
    // justifyContent: 'center',
    // Tarea 9 ok
    // alignItems: 'center',
    // justifyContent: 'center',
    // Tarea 10 ok
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  cajaMorada: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
    // Tarea 1
    // flex: 2,
    // Tarea 2
    // Tarea 3
    //alignSelf: 'flex-end',
    // Tarea 4
    alignSelf: 'flex-end',
    // Tarea 5
    // Tarea 6
    //flex: 1,
    // Tarea 7
    // Tarea 8
    // Tarea 9
    //top: 100,
    // Tarea 10
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
    // Tarea 1
    // flex: 8,
    // Tarea 2
    // Tarea 3
    // Tarea 4
    alignSelf: 'center',
    // Tarea 5
    // Tarea 6
    //flex: 1,
    // Tarea 7
    // Tarea 8
    //left: 100,
    // Tarea 9
    //left: 100,
    // Tarea 10
    //top: 50,
  },
  cajaAzul: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
    // Tarea 1
    // flex: 2,
    // Tarea 2
    // Tarea 3
    //alignSelf: 'center',
    // Tarea 4
    // Tarea 5
    // Tarea 6
    //flex: 2,
    // Tarea 7
    // Tarea 8
    // Tarea 9
    // Tarea 10
  },
});
