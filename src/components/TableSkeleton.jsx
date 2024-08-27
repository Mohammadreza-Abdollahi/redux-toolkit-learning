import { Skeleton } from "@mui/material";

const TableSkeleton = () => {
    return ( 
        <>
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
        </>
     );
}
 
export default TableSkeleton;