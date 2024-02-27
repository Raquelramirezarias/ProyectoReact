
import Navbar from "./components/header/Navbar"
import ItemListContainer from './components/ItemListCountainer/ItemListCountainer'

function App() {

  return (
<div className='App'>
  <Navbar/>
  <ItemListContainer gretting={'Bienvenidos'}/>
</div>
  )
}

export default App
