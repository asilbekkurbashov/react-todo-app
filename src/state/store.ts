import { configureStore } from '@reduxjs/toolkit'
import { ThemeReducer } from './themeSlice/ThemeSlice'
import { TaskReducer} from './tasks/task.slice'
import { SharedSliceReducer} from './shared/sharedSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { rtkAPI } from './index.api'

export const store = configureStore({
  reducer: {
    ThemeReducer,
    TaskReducer,
    SharedSliceReducer,
    [rtkAPI.reducerPath]: rtkAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkAPI.middleware)
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch