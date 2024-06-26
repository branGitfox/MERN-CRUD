import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaUpload } from 'react-icons/fa';
const UserList = () => {
    return (
        <div className='list-container'>
            <h3>List of User</h3>
            <div className="table-container">
                <table>
                  <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                        <tr>
                            <td>Ravomanana</td>
                            <td>Brandon Fidelin</td>
                            <td className='actions'><Link to="/delete/1"><FaTrash fill='red'/></Link><Link to="/delete/1"><FaUpload fill='green'/></Link></td>
                        </tr>
                  </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserList;
