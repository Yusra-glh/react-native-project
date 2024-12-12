import {Dimensions, FlatList, Keyboard, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SenderHeader from '../components/cards/SenderHeader';
import TransactionCard from '../components/cards/transaction/TransactionCard';
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { COLORS } from '../constants/Colors';
import AmountBtns from '../components/cards/transaction/AmountBtns';
import SendButton from '../components/buttons/SendButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/Store';
import { setAmount } from '../store/transaction/TransactionSlice';
import log from '../helpers/Logger';

export interface AmountForm{
  amount:number
}

const HomeScreen = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm<AmountForm>({mode: 'onBlur'})
  const amount = useSelector((state: RootState) => state.transaction.amount)
  const dispatch = useDispatch();
  const onSubmit = (data:AmountForm) => console.log(data)

  const handleAmount = (amount: number) => {
    console.log("amount home screen handle", amount);
    
    dispatch(setAmount(amount))
  }

  const handleBlur = () => {
    log.info('Input field has been deselected, user has finished input');
    
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <View style={{width:"100%"}}>
        <SenderHeader title="Flen Fouleni" rib="12*******89" image="https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Controller
        control={control}
        name="amount"
        render={({ field: { onChange, onBlur, value } }) => (
          <TransactionCard
            placeholder="0.00"
            onBlur={handleBlur}
            onChange={handleAmount}
            value={amount ? amount.toString():""}
            register={register}
          />
        )}
      />
        </View>
        <View>
        
      </View>
      <View style= {styles.bottomContainer}>
      <AmountBtns onPressHandler={handleAmount}/>
      <SendButton isValid={isValid} handleSubmit={handleSubmit(onSubmit)} />
      
      </View>
      </View>
      </TouchableWithoutFeedback>
  );
};


export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    height: '100%',
  },
  bottomContainer: {
   paddingBottom: 20,
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
  }
});
