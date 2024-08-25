import { FormControlLabel, Switch } from '@mui/material';
import './assets/css/layout.css'

const App = ()=>{
  return (
    <>
      <header className='shadow-lg'>
        <FormControlLabel control={<Switch color="warning" onChange={(e)=>console.log(e.target.checked)}/>} label={"Dark"} />
      </header>
      <section>
        <aside className='shadow-xl'>
          <h1>Aside</h1>
        </aside>
        <main className=''>
          <h1>Main</h1>
        </main>
      </section>
    </>
  )
}
export default App;
