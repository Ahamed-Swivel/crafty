import { configureStore } from '@reduxjs/toolkit'
import orderSlice from '@/features/order/orderSlice'
import authSlice from '@/features/auth/authSlice'

export const store = configureStore({
  reducer: { authSlice, orderSlice },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
