import React, { useState } from 'react';
import '../../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Lists } from './Lists';
import { InputList } from './InputList';
import { addList, deleteTask, updateStatus, } from '../../redux/todoSlice';

export const Layout = () => {
  const [listTodo, setListTodo] = useState([]);
  // const [statusFilter, setStatusFilter] = useState('');
  const dispatch = useDispatch();
  const listToDo = useSelector((state) => state.todos.listToDo);
  const statusFilter = useSelector((state) => state.todos.statusFilter);

  // const addList = (inputText) => {
  //   if (inputText.trim() !== '') {
  //     const newTask = { item: inputText, status: 'Incomplete' };
  //     setListTodo([...listTodo, newTask]);
  //   }
  // };

  // const updateStatus = (index, newStatus) => {
  //   const updatedList = [...listTodo];
  //   updatedList[index].status = newStatus;
  //   setListTodo(updatedList);
  // };

  // const deleteTask = (index) => {
  //   const updatedList = [...listTodo];
  //   updatedList.splice(index, 1);
  //   setListTodo(updatedList);
  // };

  // const editTask = (index, newText) => {
  //   const updatedList = [...listTodo];
  //   updatedList[index].item = newText;
  //   setListTodo(updatedList);
  // };

  return (
    <>
      <div className='flex justify-center p-5'>
        <h1 className='textcolor text-2xl font-medium'>To-DO-LIST</h1>
      </div>
      <InputList addList={(inputText) => dispatch(addList(inputText))}
        setStatusFilter={(status) => dispatch(updateStatus(status))} />
      <Lists items={listToDo} statusFilter={statusFilter}
        updateStatus={(index, newStatus) => dispatch(updateStatus({ index, newStatus }))}
        deleteTask={(index) => dispatch(deleteTask(index))}
      />
    </>
  );
};
