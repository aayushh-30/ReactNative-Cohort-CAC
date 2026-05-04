import React from 'react'
import { useState,useEffect } from 'react'

const HooksUse = () => {
    const [darkTheme,setDarkTheme] = useState(true)

    useEffect(()=>{
        console.log("Effected!!")
    },[darkTheme])

    const changeTheme = () => {
        setDarkTheme(!darkTheme)
    }
  return (
    <>
    <h1>Theme is {darkTheme ? "dark" : "light"}</h1>
    <button onClick={changeTheme}>Change Theme</button>
    </>
  )
}

export default HooksUse