import React, { useEffect, useState } from 'react';
import { BarLoader,DoubleBubble, SlidingPebbles } 
from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'
import { Link } from 'react-router-dom';
import { FaTrash, FaUpload } from 'react-icons/fa';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const UserList = () => {
    const[userList, setUserList] = useState([])
    const [isLoading, setIsLoading]= useState(true)

   

    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get('http://localhost:8000/api/getUsers').catch(err => toast.error(err.message))
                 setUserList(response.data)
                 setIsLoading(false)
         
         }
        getUsers()
    }, [])

  

   
    console.log(userList);
    return (
        <>
        <div className='list-container'>
            <h3>List of User</h3>
            <Link to={'createUser'}><button>New</button></Link>
            {isLoading? 
            (<DoubleBubble text={"Loading..."} bgColor={"#F0A500"} 
            center={false} width={"150px"} height={"150px"}/>):
            (<div className="table-container">
                <table>
                  <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList && userList.map((user, index) => (
                          <tr key={index}>
                            <td>{user.fname}</td>
                            <td>{user.email}</td>
                            <td className='actions'><Link to={`/deleteUser/`+user._id}><FaTrash  fill='red'/></Link><Link to={`/updateUser/`+user._id}><FaUpload fill='green'/></Link></td>
                        </tr>
                    ))}
                  
                      
                  </tbody>
                </table>
            </div>)
            
            
            
            }
            
            <ToastContainer />
        </div>
        </>
    );
}

export default UserList;
