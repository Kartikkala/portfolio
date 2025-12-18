import { configureStore } from '@reduxjs/toolkit'
import projectSlice from './slices/projectSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      project : projectSlice,
    }
  })
}