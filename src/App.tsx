import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Slider from "./components/Slider";
import FeaturedVideo from "./components/FeaturedVideo";
import useVideos from "./hooks/useVideos";

const App = () => {
  const { featured, trending, updateFeatured } = useVideos();
  const [isMainMenuOpened, setIsMainMenuOpened] = useState(false);

  return (
    <div className="flex max-h-screen">
      <Sidebar isOpened={isMainMenuOpened} setIsOpened={setIsMainMenuOpened} />
      <div className="flex-1 ml-18 relative">
        <FeaturedVideo featuredData={featured} />
        <Slider trendingData={trending} onSlideClick={updateFeatured} />
      </div>
    </div>
  );
};

export default App;