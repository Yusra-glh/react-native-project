import { configureStore } from '@reduxjs/toolkit'
import TransactionSlice from './transaction/TransactionSlice'

export const store = configureStore({
  reducer: {
     transaction: TransactionSlice
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch