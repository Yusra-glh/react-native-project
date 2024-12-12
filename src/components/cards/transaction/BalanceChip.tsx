import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../../../constants/Colors'
import { WalletIcon } from '../../../icons/wallet-icon'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/Store'

const BalanceChip = () => {
  const balance = useSelector((state: RootState) => state.transaction.balance)
  useEffect(() => {
    console.log("balance", balance)
  }, [balance])
  return (
    <View style={styles.container}>
        <View style={styles.icon}>
        <WalletIcon color={COLORS.gray} width='20' height='20'/>
        </View>
        <Text style={styles.title}>Balance: </Text>
        <Text style={styles.balanceText}>{balance} DT</Text>
    </View>
  )
}

export default BalanceChip

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor:COLORS.mediumGray,
        borderRadius: 10,
        paddingHorizontal:10
      },
      title: {
        color: COLORS.gray,
        fontSize: 14,
      },
      icon:{
        paddingRight:5
      },
      balanceText: {
        color: COLORS.black,
        fontSize: 14,
        fontWeight: 'bold',
      },
})