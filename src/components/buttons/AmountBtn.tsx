import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Chip } from 'react-native-paper';
import { COLORS } from '../../constants/Colors';

type AmountBtnProps = {
  amount: number;
  selected: boolean;
  onPress: () => void;
};

const AmountBtn = ({ amount, selected, onPress }: AmountBtnProps) => {
  return (
    <Chip
      onPress={onPress}
      showSelectedCheck={false}
      selected={selected}
      selectedColor={COLORS.chipOrange}
      textStyle={selected ? styles.selectedText : styles.text} 
      mode="outlined"
      style={[
        styles.chip,
        selected && styles.selectedChip, 
      ]}
    >
      {amount}
    </Chip>
  );
};

export default AmountBtn;

const styles = StyleSheet.create({
  chip: {
    margin: 7,
    paddingVertical: 4,
    borderColor: COLORS.lightGray, 
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor:COLORS.white,
    color: COLORS.black,
  },
  selectedChip: {
    backgroundColor: '#FFF7F0',
    borderColor: COLORS.chipOrange, 
  },
  text:{
    color: COLORS.black,
    fontSize: 16
  },
  selectedText:{
    color: COLORS.chipOrange,
    fontSize: 16
  }
});
