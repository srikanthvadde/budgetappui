// src/screens/AccountScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AddTransactionModel } from '../../models/AddTransactionModel';
import { Picker } from '@react-native-picker/picker';

const AddTransactionScreen: React.FC = () => {

  const [formData, setFormData] = useState<AddTransactionModel>({
    payeeValue: '',
    itemAmount: '0.00',
    amountType: '1',
  });

  const [showPicker, setShowPicker] = useState<boolean>(false);

  const handleInputChange = (field: keyof AddTransactionModel, value: any) => {
    setFormData({ ...formData, [field]: value });
  };



  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Payee</Text>
      <TextInput
        style={styles.input}
        placeholder="Type payee here..."
        value={formData.payeeValue}
        onChangeText={(value) => handleInputChange('payeeValue', value)}
      />

      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="0.00"
        keyboardType="decimal-pad" // Allows numeric input
        value={formData.itemAmount}
        onChangeText={(value) => handleInputChange('itemAmount', value)}
      />
     <Text style={styles.label}>Select Amount Type:</Text>
      <TouchableOpacity
        style={styles.dropdownContainer}
        onPress={() => setShowPicker(!showPicker)} // Toggle dropdown visibility
      >
        <Text style={styles.dropdownText}>
          {formData.amountType === '1' ? 'Expenses' : 'Credits'}
        </Text>
      </TouchableOpacity>

      {showPicker && (
        <Picker
          selectedValue={formData.amountType}
          onValueChange={(value) => handleInputChange('amountType', value)}
          style={styles.picker}
        >
          <Picker.Item label="Expenses" value="1" />
          <Picker.Item label="Credits" value="2" />
        </Picker>
      )}
    </View>
  );
};

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  input: {
    height: 40, // Set height for better usability
    width: '100%', // Full width
    borderBottomColor: 'gray', // Bottom border color
    borderBottomWidth: 1, // Bottom border width
    marginBottom: 20,
    paddingLeft: 0, // No padding on the left
    paddingVertical: 5, // Vertical padding for better spacing
    backgroundColor: 'transparent', // Transparent background
  },
  dropdownContainer: {
    height: 50,
    width: '100%',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  dropdownText: {
    paddingVertical: 5,
    fontSize: 16,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default AddTransactionScreen;
