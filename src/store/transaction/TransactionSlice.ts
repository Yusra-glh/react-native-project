import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {FEES} from '../../constants/Fees';
import log from '../../helpers/Logger';

export interface TransactionState {
  balance: string;
  fees: string;
  total: string;
  amount: string;
}

const initialState: TransactionState = {
  balance: '2.500.000',
  fees: '',
  total: '',
  amount: '',
};

type CalculationResult = {
  total: string;
  fees: string;
  showBanner: boolean;
};

function convertTNDToMillimes(amountTND: number): string {
  // convert the amount from tnd to millimes
  const amountInMillimes = amountTND * 1000;
  // format the amount to have 3 decimal places
  const formattedAmount = (amountInMillimes / 1000)
    .toFixed(3)
    .replace(/(\d)(?=(\d{3})+\.)/g, '$1.');
  log.debug('convertTNDToMillimes formattedAmount', formattedAmount);
  return formattedAmount;
}

function formatTNDToMillimes(amountTND: number): string {
    // format the amount to have 3 decimal places
    const formattedAmount = (amountTND / 1000)
      .toFixed(3)
      .replace(/(\d)(?=(\d{3})+\.)/g, '$1.');
      log.debug('formatTNDToMillimes formattedAmount', formattedAmount);
    return formattedAmount;
  }
  
function convertStringAmountToMillimes(amount: string): number {
  return parseFloat(amount.replace(/\./g, ''));
}

const calculateTotal = (amount: number): CalculationResult => {
  try {
    if (amount < 20) {
      // When the amount is less than 20 TND, apply the discount
      return {
        total: convertTNDToMillimes(amount + FEES.byDiscount),
        fees: convertTNDToMillimes(FEES.byDiscount),
        showBanner: true,
      };
    } else {
      // Calculate the fee based on 1% of the amount
      const calculatedFee = amount * FEES.byPercentage;
      // Apply the maximum fee cap of 3 TND
      const appliedFee = Math.min(calculatedFee, FEES.maxFee);
      return {
        total: convertTNDToMillimes(amount + appliedFee),
        fees: convertTNDToMillimes(appliedFee),
        showBanner: false,
      };
    }
  } catch (e) {
    console.error(e);
    return {
      total: convertTNDToMillimes(amount),
      fees: '0',
      showBanner: false,
    };
  }
};

export const TransactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setAmount: (state: TransactionState, action) => {
      const result = calculateTotal(action.payload);
      log.debug('setAmount result', result);
      const newBalance = formatTNDToMillimes(convertStringAmountToMillimes(state.balance) -convertStringAmountToMillimes(result.total));
      log.debug('newBalance----------- ', newBalance);
      return {
        ...state,
        amount: convertTNDToMillimes(action.payload),
        total: result.total,
        balance: newBalance,
        fees: result.fees,
      };
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
});

export const {setAmount} = TransactionSlice.actions;

export default TransactionSlice.reducer;
