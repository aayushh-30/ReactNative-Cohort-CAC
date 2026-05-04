import React from 'react'
import { useState } from 'react'

function FormHandling() {
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [sex,setSex] = useState("")
  return (
    <>
      <input
      placeholder='Enter Name'
      value={name}
      onChange={(e) => {setName(e.target.value)}}
      />
      <input
      placeholder='Enter Age'
      value={age}
      onChange={(e) => {setAge(e.target.value)}}
      />
      <input
      placeholder='Enter Sex'
      value={sex}
      onChange={(e) => {setSex(e.target.value)}}
      />

      <button
      onClick={
        () => {
            console.log({
                name,
                age,
                sex
            })
        }
      }
      >Submit</button>

      
    </>
  )
}

export default FormHandling
