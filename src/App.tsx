import React from "react"
import Sidebar from "./components/Sidebar"
import Slider from "./components/Slider"
import FeaturedVideo from "./components/FeaturedVideo"

const App = () => {

  return (
    <div className="flex max-h-screen">
      <Sidebar />
      <div className="flex-1 relative">
        <FeaturedVideo />
        <Slider />
      </div>
    </div>
  )
}

export default App
