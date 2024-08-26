import { useEffect, useState } from 'react';
import '../assets/css/table.css'
import { Alert, Skeleton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/user/UserSlice';

const User = () => {
    const {loading , data , error} = useSelector(state=>state.user);
    const dispatch = useDispatch();
    useEffect(()=>{
            dispatch(getUser())
    },[])

    return ( 
        <>
            <h1 className="text-center text-cyan-500 dark:text-white text-3xl my-5">Users</h1>
            {
                loading ? (
                    <div>
                        <Skeleton animation="wave" width={1000} height={90} className='m-auto'/>
                        <Skeleton animation="wave" width={1000} height={60} className='m-auto'/>
                        <Skeleton animation="wave" width={1000} height={60} className='m-auto'/>
                        <Skeleton animation="wave" width={1000} height={60} className='m-auto'/>   
                        <Skeleton animation="wave" width={1000} height={60} className='m-auto'/>   
                        <Skeleton animation="wave" width={1000} height={60} className='m-auto'/>   
                        <Skeleton animation="wave" width={1000} height={60} className='m-auto'/>   
                        <Skeleton animation="wave" width={1000} height={60} className='m-auto'/>   
                        <Skeleton animation="wave" width={1000} height={60} className='m-auto'/>   
                        <Skeleton animation="wave" width={1000} height={60} className='m-auto'/>   
                        <Skeleton animation="wave" width={1000} height={60} className='m-auto'/>   
                    </div>

                ) : error ? (
                    <div dir='ltr' className='text-center text-3xl'>
                        <Alert variant="outlined" severity="error">{error}</Alert>
                    </div>
                ) : (
                    <table>
                        <thead className='dark:text-white'>
                            <tr>
                                <th>#</th>
                                <th>نام</th>
                                <th>نام کاربری</th>
                                <th>ایمیل</th>
                                <th>ادرس</th>
                            </tr>
                        </thead>
                        <tbody className='dark:text-white'>
                            {
                                data.map((item)=>{
                                    return(
                                        <tr className='hover:bg-fuchsia-200'>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.username}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address.city}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                )
            }
        </>
     );
}
 
export default User;