import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
import "../App.css"
import Header from '../Components/Header'
import { ThemeProvider } from '../Context/Theme'
import { useState, useEffect } from 'react'

const RootLayout = () => {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light")
    document.body.style.backgroundColor = "#000";
  };

  const darkTheme = () => {
    setThemeMode("dark");
    document.body.style.backgroundColor = "#fff";

  };

  //actual change in theme

  useEffect(() => {
    document.querySelector("html")?.classList.remove("light", "dark");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);

  return (

    <ThemeProvider value={{ themeMode, lightTheme, darkTheme, setThemeMode}}>
      <div className=' relative'>
        <Header />
       
        <main className='p-10 mx-auto'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>


  )
}

export default RootLayout
