import { useState } from 'react';
import '../assets/css/table.css'
import { Skeleton } from '@mui/material';

const User = () => {
    const [loading , setLoading] = useState(true)
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
                            <tr className='hover:bg-fuchsia-200'>
                                <td>1</td>
                                <td>Ali</td>
                                <td>Ali132-2</td>
                                <td>Alireasada@gmail.com</td>
                                <td>Tehran</td>
                            </tr>
                        </tbody>
                    </table>
                )
            }
        </>
     );
}
 
export default User;