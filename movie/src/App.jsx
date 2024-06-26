// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './Store/Store'
import Home from './Page/Home'
import Watchletters from './Page/Watchletters'
import Navbar from './Component/Navbar'
import MovieDetails from './Page/MovieDetails'
import Login from './Page/Login'
import Singup from './Page/Singup'
function App() {


  return (
    <>

      <Provider store={store}>
        <BrowserRouter>
          
          <Routes>
            <Route path='/' element={<Singup />}></Route>
            <Route path='/singup' element={<Singup />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/movies' element={<Home />}></Route>
            <Route path='/movies/Watchletter' element={<Watchletters />}></Route>
            <Route path="/movies/:id/:movie" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Provider>

    </>
  )
}

export default App
