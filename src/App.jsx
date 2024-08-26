import './assets/css/layout.css'
import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/Main';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const App = ()=>{
  const {darkmode} = useSelector(state=>state.darkmode)
  return (
    <>
      <section className={darkmode}>
        <BrowserRouter>
          <Header/>
          <Aside/>
          <Main/>
        </BrowserRouter>
      </section>
    </>
  )
}
export default App;
