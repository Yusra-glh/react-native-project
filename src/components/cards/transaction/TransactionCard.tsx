import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BalanceChip from './BalanceChip'
import TextFormField from '../../textInputs/TextFormField'
import { UseFormRegister } from 'react-hook-form';
import { AmountForm } from '../../../screens/HomeScreen';
import TransactionInfo from './TransactionInfo';

type TransactionProps = {
  register: UseFormRegister<AmountForm>
  placeholder?:string
  onBlur?: ((e: any) => void) | undefined
  onChange?: (...event: any[]) => void
  value: string
};

const TransactionCard = ({register,placeholder,onBlur,onChange,value}:TransactionProps) => {
  return (
    <View style={styles.container}>
      <BalanceChip />
      <TextFormField register={register} placeholder={placeholder} onBlur={onBlur} onChange={onChange} value={value} />
      <TransactionInfo />
    </View>
  )
}

export default TransactionCard

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: "100%",
      },
})