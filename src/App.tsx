
// import { useEffect, useState } from 'react'
import './App.css'
// import { ThemeProvider } from './Context/Theme'
// import ThemeBtn from './Components/ThemeBtn';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './Layouts/RootLayout';
import PageNotFound from './Components/PageNotFound';
import Home from './Components/Home';

function App() {



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} >
           
        <Route index element={<Home />} />

        <Route path='*' element={<PageNotFound />} />

      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
