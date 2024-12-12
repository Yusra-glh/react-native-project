import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {COLORS} from '../../constants/Colors';

type SendButtonProps = {
  isValid: boolean;
  handleSubmit: () => void;
};
const SendButton = ({isValid, handleSubmit}: SendButtonProps) => {
  return (
    <Button
      mode="contained"
      onPress={handleSubmit}
      disabled={!isValid}
      labelStyle={styles.text}
      style={styles.container}>
      Send money
    </Button>
  );
};

export default SendButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.DarkOrange,
    borderRadius: 6,
    width: '90%',
    alignSelf: 'center',
    paddingVertical:10
  },
  text:{
    fontSize: 16,
  }
});
