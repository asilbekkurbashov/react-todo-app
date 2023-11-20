import { configureStore } from '@reduxjs/toolkit'
import {TodoReducer} from './todosSlice/Todos'
import { ThemeReducer } from './themeSlice/ThemeSlice'

export const store = configureStore({
  reducer: {
    TodoReducer,
    ThemeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch