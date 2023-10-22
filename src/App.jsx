import React from 'react'
import { useEffect, useState } from 'react'
import Sidebar from './components/sidebar/Sidebar.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import './App.css'

export default function App() {



  // // dark background tailwind css snippet
  // const [theme, setTheme] = useState("light")

  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark")
  //   } else {
  //     document.documentElement.classList.remove("dark")
  //   }
  // }, [theme])

  // const handleThemeSwitch = () => {
  //   setTheme(theme === "dark" ? "light" : "dark")
  // }
  // // dark background tailwind css snippet



  return (
    <div className='flex'>
      <Sidebar />
      <Dashboard />
    </div>
  )
}
