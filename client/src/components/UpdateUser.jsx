import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { DoubleBubble } 
from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'
const UpdateUser = () => {
    const [userInfo, setUserInfo] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const Navigate = useNavigate()
    const {id} = useParams()
    const handleChange = (e) => {
        const {name, value} = e.target
        setUserInfo((userInfo) => ({...userInfo, [name]:value}))
    }

    useEffect(() => {
      getOne()
      
    }, [])

    const getOne = async () => {
          await axios.get('http://localhost:8000/api/getOne/'+id).then(res => {
            setUserInfo(res.data)
        }).catch(err => toast.error(err.message))
        
    }

    const handleSubmit = async () => {
        setIsLoading(true)
        await axios.put('http://localhost:8000/api/updateUser/'+id, userInfo).then(res => {
            setIsLoading(false)
            
        }).then(() =>Navigate('/')).catch(err => toast.error(err.message))
        
    }


    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Nom</label>
                <input type="text" name='fname' value={userInfo.fname} onChange={handleChange}/>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' value={userInfo.email} onChange={handleChange}/>
                <button>{isLoading ? (<DoubleBubble text={"Loading..."} bgColor={"#F0A500"} 
            center={false} width={"60px"} height={"60px"}/>):'Update'}</button>
            </form>
        </div>
        <ToastContainer />
        </>
    );
}

export default UpdateUser;
