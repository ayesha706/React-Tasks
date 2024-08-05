import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../src/redux/todoSlice'
import { api } from './rtk-query/spi'
import { apiSlice } from "./rtk-query/userSlice";


export const store = configureStore({
  reducer: {
    todos: tasksReducer,
      [api.reducerPath]: api.reducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (gDM) => gDM().concat(api.middleware, apiSlice.middleware),
})
