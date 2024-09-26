// src/screens/TransactionsScreen.tsx
import React from "react";
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity } from "react-native";

const TransactionsScreen:  React.FC<{ navigation: any }> = ({ navigation }) => {

  const onPressOpenAddTransaction = () =>{
    navigation.navigate('AddTransactionScreen'); 
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPressOpenAddTransaction}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 100,
    paddingRight: 50
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: '#007BFF',
    width: 60,
    height: 60,
    borderRadius: 30, // Makes it circular
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default TransactionsScreen;
