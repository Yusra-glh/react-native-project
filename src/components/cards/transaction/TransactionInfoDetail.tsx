import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-paper'
import { COLORS } from '../../../constants/Colors'

type TransactionInfoDetailProps = {
    title: string
    value: string
    bold?: boolean
}
const TransactionInfoDetail = ({title,value,bold}:TransactionInfoDetailProps) => {
    return (
        <View style={styles.container}>
          <Text style={bold ? styles.titleText : styles.text}>{title}</Text>
          <Text style={bold ? styles.titleText : styles.text}>{value} DT</Text>
        </View>
      );
    
}

export default TransactionInfoDetail

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
      },
      titleText: {
        color: COLORS.black,
        fontSize: 16,
      },
      text: {
        color: COLORS.gray,
        fontSize: 15,
      },
})