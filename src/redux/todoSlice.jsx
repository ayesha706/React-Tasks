import { createSlice } from '@reduxjs/toolkit'

const initialState =
{
  listToDo: [],
  statusFilter: '',
  currentPage: 1,
  listPerPage: 3,
}
export const todoSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    addList: (state, action) => {
      const newTask = { item: action.payload, status: 'Incomplete' };
      state.listToDo.push(newTask);
    },
    deleteTask: (state, action, index) => {
      state.listToDo.splice(action.payload, 1);
    },
    editTask: (state, action) => {
      const { index, newText } = action.payload;
      state.listToDo[index].item = newText;
    },
    updateStatus: (state, action) => {
      const { index, newStatus } = action.payload;
      if (index !== undefined) {
        state.listToDo[index].status = newStatus;
      } else {
        state.statusFilter = action.payload;
      }
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setlistPerPage: (state, action) => {
      state.listPerPage = action.payload;
    }
  },
})
export const { addList, deleteTask, editTask, updateStatus, setCurrentPage, setlistPerPage } = todoSlice.actions;

export default todoSlice.reducer;
