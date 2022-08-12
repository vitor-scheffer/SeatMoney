import { useEffect, useState } from 'react'
import { apiB3 } from './services/Api'

function App() {
  const Setup = async () => {
    try {
      const data = await apiB3.get()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  } 

  useEffect(() => {
    Setup()
  })

  return (
    <div className="App">
     
    </div>
  )
}

export default App
