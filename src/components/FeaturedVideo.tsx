import React, { useState, useEffect } from "react";

const FeaturedVideo = ({ featuredData }) => {
  const [isImageVisible, setIsImageVisible] = useState(true);

  useEffect(() => {
    setIsImageVisible(true);

    if (featuredData.VideoUrl) {
      const timer = setTimeout(() => {
        setIsImageVisible(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [featuredData]);

  const formatDuration = (durationInSeconds) => {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    return `${hours ? hours + 'h ' : ''}${minutes}m`;
  };

  return (
    <div className="relative w-full h-screen text-white overflow-hidden">
      <div className="absolute inset-0 z-10">
        {isImageVisible ? (
          <img
            src={featuredData.CoverImage}
            alt={featuredData.Title}
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            src={featuredData.VideoUrl}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          />
        )}
      </div>
      <div className="absolute inset-0 z-20 flex flex-col justify-center p-10 bg-gradient-to-t from-black via-transparent to-transparent">
        <div className="mb-[25vh]">
          <span className="text-xl font-bold">{featuredData.Category}</span>
          <img
            src={featuredData.TitleImage}
            alt={`${featuredData.Title} logo`}
            className="w-auto h-24 my-4"
          />
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>{featuredData.ReleaseYear}</span>
            <span>{featuredData.MpaRating}</span>
            <span>{formatDuration(featuredData.Duration)}</span>
          </div>
          <p className="mt-4 max-w-lg text-base leading-relaxed">
            {featuredData.Description}
          </p>
          <div className="flex space-x-4 mt-6">
            <button
              className="flex items-center cursor-pointer px-6 py-2 bg-white text-black font-bold rounded-4xl hover:shadow-lg transition-colors duration-200 hover:bg-gray-200 active:bg-gray-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Play
            </button>
            <button className="cursor-pointer px-6 py-2 rounded-4xl bg-blue-600 bg-opacity-50 text-white font-bold transition-colors duration-200 hover:bg-opacity-70 active:bg-opacity-90">
              More info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedVideo;