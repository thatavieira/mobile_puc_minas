import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';
import Saldo from './components/saldo';
import Lancamento from './components/Lancamento';
import SaldoProvider from './context/ContaContext';

const App = () => {

  return (
    <SaldoProvider>
    <View style={styles.container}>
      <Saldo />

      <Lancamento Credito />

      <Lancamento />

  
    </View>
    </SaldoProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20
  },
});

export default App;
