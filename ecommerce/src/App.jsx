import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
const [count, setCount] = useState()
  return (
<div className='App'>
  <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path='/'element={<ItemListContainer gretting={'Bienvenidos a Original Sneaker'} />}> </Route>
   <Route path='/'element={<ItemListContainer />} />
   <Route path='/category/:categoryId'element={<ItemListContainer />} />
   <Route path='/item/:itemId'element={<ItemDetailContainer />}></Route>
   <Route path='*'element={<h1>404 NOT FOUND</h1>}></Route>
  </Routes>
  </BrowserRouter>
</div>
  )

}

export default App
