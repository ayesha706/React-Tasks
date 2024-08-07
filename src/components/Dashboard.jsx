
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetAllUserQuery,
} from '../rtk-query/userSlice';
import { data } from 'autoprefixer';

const Dashboard = () => {
  const { userId } = useParams();
//   console.log(userId);
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const { data: users, error, isLoading } = useGetAllUserQuery();
  const [userData, setUserData] = useState({ name: '', email: '' });
    // console.log(users);
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await updateUser({ id: userId, data: userData }).unwrap();
      alert('User updated successfully');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteUser(userId).unwrap();
      alert('User deleted successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userData.name}
          onChange={handleChange}
            className=" rounded-md border border-blue-gray-200 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 focus:border-2 focus:border-gray-900"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
            className=" rounded-md border border-blue-gray-200 px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 focus:border-2 focus:border-gray-900"
        />
        <button onClick={handleUpdate} 
         className='buttoncolor  dark:bg-violet-500 text-xl font-medium p-3 m-2 rounded-lg'
        >Update User</button>
      </div>

      <div>
        <button onClick={handleDelete}
          className='buttoncolor  dark:bg-violet-500 text-xl font-medium p-3 m-2 rounded-lg'
        >Delete User</button>
      </div>
    
        
      <div>
        <h2>All Users</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>An error occurred: {error.message}</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.users.map(user=> (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;