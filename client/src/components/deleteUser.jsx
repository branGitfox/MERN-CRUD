import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
const DeleteUser = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const deleteUser = async () => {
        await axios.delete('http://localhost:8000/api/deleteUser/'+id).then(res => {
                toast.success(res.data)
               
        }).catch(err => toast.error(err.message)) 
        
    }

    useEffect(() => {
        deleteUser()
        navigate('/')
    }, [])
    return (
        <div>
            <ToastContainer/>
        </div>
    );
}

export default DeleteUser;
