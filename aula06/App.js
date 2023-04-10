import React from 'react';
import { View, StyleSheet } from 'react-native';
import BotaoProps from './components/BotaoProps.js';

const App = () => {
  
  return (
    <View style={styles.container}>
      <BotaoProps 
        label="oi" 
        corFundo="green"
        msg="oi pessoal"
      />

      <BotaoProps 
        label="Olá" 
        corFundo="yellow"
        msg="oi pessoal 2"
      />

    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
