import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TransactionInfoDetail from './TransactionInfoDetail'

const TransactionInfo = () => {
  return (
    <View style={styles.container}>
      <TransactionInfoDetail title='Fees' value='0.000'/>
      <TransactionInfoDetail title='Total' value='0.000' bold={true}/>
    </View>
  )
}

export default TransactionInfo

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        width: "90%",
      },
})