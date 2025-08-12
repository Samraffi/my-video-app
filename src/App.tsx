import React from "react"
import Sidebar from "./Sidebar"
import SimpleSlider from "./SimpleSlider"

const App = () => {

  return (
    <div className="flex max-h-screen">
      <Sidebar />
      <div className="flex-1 relative">
        <div className="absolute flex-1 h-screen top-0 w-full" />
        <SimpleSlider />
      </div>
      {/* <div className="flex-1 relative">
        <div className="flex-1 absolute top-0">
        </div>
        <SimpleSlider />
      </div> */}
    </div>
  )
}

export default App
