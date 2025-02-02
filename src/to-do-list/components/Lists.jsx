import React, { useState, useEffect } from 'react';
import '../../App.css';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaPenToSquare } from "react-icons/fa6";
import Paginate from './Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, updateStatus } from '../../redux/todoSlice';

export const Lists = ({ items, statusFilter, }) => {
  const [status, setStatus] = useState('');
  const [deleteIndex, setDeleteIndex] = useState(null);

  const [editIndex, setEditIndex] = useState([]);
  const [editText, setEditText] = useState([]);

  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [listPerPage] = useState(3);


  const dispatch = useDispatch();
  const listToDo = useSelector((state) => state.todos.listToDo);
  const currentpage = useSelector((state) => state.todos.currentPage);
  const listPerPage = useSelector((state) => state.todos.listPerPage);

  const paginate = (pageNumber) => {
    // setCurrentPage(pageNumber);
    dispatch(setCurrentPage(pageNumber));
  };
  useEffect(() => {
    const _list = [...items]
    const indexOfLastList = currentPage * listPerPage;
    const indexOfFirstList = indexOfLastList - listPerPage;
    // console.log("items===", currentPage * listPerPage);
    const currentLists = _list.slice(indexOfFirstList, indexOfLastList);
    setList([...currentLists])
  }, [items, currentPage, listPerPage])


  useEffect(() => {
    setStatus(statusFilter);
  }, [statusFilter]);

  const handleChange = (index, e) => {
    const updatedStatus = e.target.value;
    // updateStatus(index, updatedStatus);
    dispatch(updateStatus({ index, newStatus: updatedStatus }));

  };

  const handleDeleteTask = (index) => {
    setDeleteIndex(index);
    dispatch(deleteTask(index));
  };

  const handleEditTask = (index) => {
    const newEditIndex = [...editIndex];
    newEditIndex[index] = true;
    setEditIndex(newEditIndex);
    const newEditText = [...editText];
    newEditText[index] = items[index].item;
    setEditText(newEditText);
    // setEditIndex(index);
    // setEditText(items[index].item);
  };

  const saveEditedTask = (index) => {
    // const updatedList = [...items];
    // updatedList[index].item = editText;
    dispatch(editTask({ index, newText: editText[index] }))
    const newEditIndex = [...editIndex];
    newEditIndex[index] = false;
    setEditIndex(newEditIndex);
    // setEditIndex(false);
    // setEditText('');
  };
  const editList = (e, index) => {
    // setEditText(e.target.value);
    const newEditIndex = [...editIndex];
    newEditIndex[index] = e.target.value;
    setEditText(newEditIndex);
  }

  const cancelEdit = (index) => {
    const newEditIndex = [...editIndex];
    newEditIndex.splice(index, 1);
    setEditIndex(newEditIndex);
    // setEditText('');
  };

  const filteredItems = listToDo.filter((item) => {
    if (!item || !item.status) {
      return false;
    }
    const lowerCaseItemStatus = item.status.toLowerCase();
    const lowerCaseStatus = status.toLowerCase();
    if (lowerCaseStatus === '' || lowerCaseItemStatus === lowerCaseStatus) {
      return true;
    }
    return false;
  });

  return (
    <div className='grid grid-cols-2'>
      <div>
        {list.map((item, index) => (
          <div className='m-3  flex p-6 bg-slate-300 rounded-lg' key={index}>
            {editIndex[index] ? (
              <>
                <input
                  type="text"
                  className='textcolor p-2'
                  value={editText[index]}
                  onChange={(e) => editList(e, index)}
                />
                <button className=' p-2 m-1' onClick={() => saveEditedTask(index)}>Save</button>
                <button className=' p-2 m-1' onClick={() => cancelEdit(index)}>Cancel</button>
              </>
            ) : (
              <>
                <div className='w-[70%] text-xl text-indigo-900 font-medium'>{item.item}</div>
                <div className='w-[20%]'>
                  <select className="textcolor p-2" value={item.status} onChange={(e) => handleChange(index, e)}>
                    <option value='Incomplete'>Incomplete</option>
                    <option value='Complete'>Complete</option>
                  </select>
                </div>
                <RiDeleteBin6Fill
                  className='text-2xl text-pink-900 m-1 cursor-pointer'
                  onClick={() => handleDeleteTask(index)}
                />
                <FaPenToSquare
                  className='text-2xl text-pink-900 m-1 cursor-pointer'
                  onClick={() => handleEditTask(index)}
                />
              </>
            )}
          </div>
        ))}
        <Paginate
          listPerPage={listPerPage}
          totalLists={items.length}
          paginate={paginate}
        />
      </div>
      <div>
        {statusFilter && (
          filteredItems.map((filteredItem, index) => (
            <div key={index} className='m-3 p-5 w-[30%] bg-orange-400 rounded-lg'>
              <h1 className='text-lg font-medium'>Title</h1>
              <div>{filteredItem.item}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

