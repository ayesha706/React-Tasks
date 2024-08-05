import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UsernameSearch = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/users');
                setUsers(response.data.users);
                setFilteredUsers(response.data.users); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        const filtered = users.filter(user => 
            `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filtered);
    }, [searchTerm, users]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="textcolor p-2 border-2 border-gray-300 rounded"
            />
            <div>
                {filteredUsers.length > 0 ? (
                    filteredUsers.map(user => (
                        <div key={user.id} className="p-3 border-b border-gray-200">
                            <h2 className="text-lg font-bold">  {user.firstName} {user.lastName}</h2>
                        </div>
                    ))
                ) : (
                    <p>No users found</p>
                )}
            </div>
        </div>
    );
}

// {
//     data.map(currentData => (
//        <div key={currentData.id}>
//        <h3>{currentData.firstName} {currentData.lastName}</h3>
//        </div>
//    ))
// }