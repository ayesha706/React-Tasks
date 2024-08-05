import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../src/redux/todoSlice'
import { api } from './rtk-query/spi'


export const store = configureStore({
  reducer: {
    todos: tasksReducer,
      [api.reducerPath]: api.reducer,
  },
  middleware: (gDM) => gDM().concat(api.middleware),
})