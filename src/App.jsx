import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Watchlist from './pages/Watchlist'
import Navbar from './pages/Navbar'
import { WatchListProvider } from './context/WatchListContext'

function App() {
  return (
    <WatchListProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Watchlist(0)' element={<Watchlist />} />
      </Routes>
    </BrowserRouter>
    </WatchListProvider>
  )
}

export default App

