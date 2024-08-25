import { FormControlLabel, Switch } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/theme/ThemeSlice";

const Header = () => {
    const dispatch = useDispatch()
    const {darkmode} = useSelector(state=>state.darkmode)
    return ( 
        <>
            <header className='shadow-lg bg-sky-200 dark:bg-amber-800'>
                <FormControlLabel className="text-slate-900 dark:text-white" control={<Switch color="white" onChange={(e)=>dispatch(setTheme(e.target.checked ? 'dark' : 'light'))}/>} label={darkmode === 'light' ? 'Dark' : 'Light'} />
            </header>
        </>
     );
}
 
export default Header;