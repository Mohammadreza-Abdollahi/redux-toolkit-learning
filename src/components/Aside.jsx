const menuItems = [
    {name:"کاربران" , link:"#"},
    {name:"نظرات" , link:"#"},
    {name:"گالری" , link:"#"},
    {name:"پست ها" , link:"#"},
]
const Aside = () => {
    return ( 
        <>
            <aside className='shadow-xl bg-sky-200 dark:bg-amber-800'>
                <nav className="py-7 px-2 text-2xl">
                    {
                        menuItems.map((item)=>{
                            return(
                                <a className="block p-3 my-3 rounded-md hover:bg-orange-300 dark:hover:bg-sky-200 dark:hover:text-slate-800 text-slate-800 dark:text-white" href={`${item.link}`}>{item.name}</a>
                            )
                        })
                    }
                </nav>
            </aside>
        </>
     );
}
 
export default Aside;