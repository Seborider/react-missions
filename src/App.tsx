import React, { useEffect, useState } from "react"
import "./App.css"

function App() {
  const [message, setMessage] = useState("")
  const [count, setCount] = useState(0)
  useEffect(() => {
    setMessage(`${count} Times clicked`)
  })
  const onClick = () => {
    setCount(count + 1)
  }
  return (
    <div className="container">
      <a href="#" onClick={onClick}>
        Click here
      </a>
      <div style={{ marginLeft: '1rem' }}>{message}</div>
    </div>
  )
}

export default App
