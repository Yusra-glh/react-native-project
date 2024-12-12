import React from 'react';
import { Text, TextInput, View, TextInputProps, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/Colors';
import { UseFormRegister } from 'react-hook-form';
import { AmountForm } from '../../screens/HomeScreen';
import { CurrencyIcon } from '../../icons/currency-icon';


type TextFormFieldProps = {
  register: UseFormRegister<AmountForm>
  placeholder?:string
  onBlur?: ((e: any) => void) | undefined;
  onChange?: ((text: string) => void) | undefined;
  value: string;
};



const TextFormField = ({register,placeholder,onBlur,onChange,value}:TextFormFieldProps) => {

  return (
      <View style={styles.textFieldContainer}>
        <CurrencyIcon />
        <TextInput
        placeholder={placeholder}
        onBlur={onBlur}
        style={styles.input}
        onChangeText={onChange}
        value={value}
        keyboardType='numeric'
        />
      </View>
  );
};
const styles = StyleSheet.create({
  textFieldContainer: {
    width: '90%',
    height: 60,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    paddingHorizontal: 10,
    //alignContent:"space-between",
    alignItems:"center",
    //textAlign:"right",
    flexDirection:"row",
  },

  input: {
    flex: 1,
    textAlign: 'right',
    fontSize: 16,
  },
});

export default TextFormField;
