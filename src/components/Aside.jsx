import { NavLink } from "react-router-dom";

const menuItems = [
    {name:"کاربران" , link:"/user"},
    {name:"نظرات" , link:"/comment"},
    {name:"گالری" , link:"/gallery"},
    {name:"پست ها" , link:"/post"},
]
const Aside = () => {
    return ( 
        <>
            <aside className='shadow-xl bg-sky-200 dark:bg-amber-800'>
                <nav className="py-7 px-2 text-2xl">
                    {
                        menuItems.map((item , index)=>{
                            return(
                                <NavLink key={index} to={item.link} className={({isActive})=>isActive ? `bg-orange-400 block p-3 my-3 rounded-md hover:bg-orange-400 dark:hover:bg-sky-200 dark:hover:text-slate-800 text-white dark:text-white` : `block p-3 my-3 rounded-md hover:bg-orange-300 dark:hover:bg-sky-200 dark:hover:text-slate-800 text-slate-800 dark:text-white`}>{item.name}</NavLink>
                            )
                        })
                    }
                </nav>
            </aside>
        </>
     );
}
 
export default Aside;