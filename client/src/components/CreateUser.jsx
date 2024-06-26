import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateUser = () => {
    const [userInfo, setUserInfo] = useState({name:'', email:''})
    const navigate = useNavigate()
    const handleChange =(e) => {
        const {name, value} = e.target
        setUserInfo(userInfo => ({...userInfo,[name]:value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:8000/api/createUser', userInfo).then(res => {
            
        }).catch(err => toast.error(err.message))
        navigate('/')
    }

    return (
        <>
        <div className='form-container'>
                <h3>New User</h3>
                <form  onSubmit={handleSubmit}>
                    
                    <div>
                        <label htmlFor="name">Name</label>
                        <input id='name' type="text" name='name' onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id='email' type="text" name='email' onChange={handleChange}/>
                    </div>
                    <div>
                        <button>Save</button>
                    </div>

                </form>
        </div>
        <ToastContainer/>
        </>

    );
}

export default CreateUser;
