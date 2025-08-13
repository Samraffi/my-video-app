import { useState, useEffect } from "react";

const useVideoSwitch = (featuredData) => {
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

  return isImageVisible;
};

export default useVideoSwitch;