import React from "react"
import Sidebar from "./Sidebar"

const App = () => {

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 h-screen">
      </div>
    </div>
  )
}

export default App
