import React from "react";
import useVideos from "./hooks/useVideos";
import Sidebar from "./components/Sidebar";
import Slider from "./components/Slider";
import FeaturedVideo from "./components/FeaturedVideo";

const App = () => {
  const { featured, trending, updateFeatured } = useVideos();

  return (
    <div className="flex max-h-screen">
      <Sidebar />
      <div className="flex-1 relative">
        <FeaturedVideo featuredData={featured} />
        <Slider onSlideClick={updateFeatured} trendingData={trending} />
      </div>
    </div>
  );
};

export default App;