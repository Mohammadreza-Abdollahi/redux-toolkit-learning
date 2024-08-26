import { Navigate, Route, Routes } from "react-router-dom";
import User from "../pages/User";
import Gallery from "../pages/Gallery";
import Comment from "../pages/Comment";
import Post from "../pages/Post";

const Main = () => {
    return ( 
        <>
            <main className='bg-orange-100 dark:bg-blue-950'>
            {
                <Routes>
                    <Route path="/" element={<Navigate to={'/user'}/>}/>
                    <Route path="/user" element={<User/>}/>
                    <Route path="/comment" element={<Comment/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                    <Route path="/post" element={<Post/>}/>
                </Routes>
            }
            </main>
        </>
     );
}
 
export default Main;