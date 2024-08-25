import './assets/css/layout.css'
import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/Main';
import { useSelector } from 'react-redux';

const App = ()=>{
  const {darkmode} = useSelector(state=>state.darkmode)
  return (
    <>
      <section className={darkmode}>
        <Header/>
        <Aside/>
        <Main/>
      </section>
    </>
  )
}
export default App;
