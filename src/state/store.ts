import { configureStore } from '@reduxjs/toolkit'
import {TodoReducer} from './todosSlice/Todos'
import { ThemeReducer } from './themeSlice/ThemeSlice'
import { rtkAPI } from './index.api'

export const store = configureStore({
  reducer: {
    TodoReducer,
    ThemeReducer,
    [rtkAPI.reducerPath]: rtkAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch