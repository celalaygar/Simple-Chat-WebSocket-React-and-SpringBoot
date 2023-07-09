import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from './Authentication/AuthenticationSlice';

export const store = configureStore({
    reducer: { authentication: authenticationReducer },
})
