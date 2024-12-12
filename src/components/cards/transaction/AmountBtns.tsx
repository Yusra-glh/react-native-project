import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AmountBtn from '../../buttons/AmountBtn';
import {AMOUNTS} from '../../../constants/Constants';

type AmountBtnsProps = {
  onPressHandler: (amount: number) => void;
};
const AmountBtns = ({onPressHandler}:AmountBtnsProps) => {
  const [selectedAmount, setSelectedAmount] = useState(0);

  const handlePress = (amount: number) => {
    setSelectedAmount(amount);
    onPressHandler(amount);
  };

  return (
    <View style={styles.container}>
      {AMOUNTS.map(amount => (
        <AmountBtn
          key={amount}
          amount={amount}
          onPress={() => handlePress(amount)}
          selected={selectedAmount === amount}
        />
      ))}
    </View>
  );
};

export default AmountBtns;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
     marginBottom: 30,
    justifyContent: 'center',
    },
});
