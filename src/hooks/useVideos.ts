import { useState, useEffect } from "react";
import data from "../constants/data.json";

interface VideoItem {
  Id: string;
  Title: string;
  CoverImage: string;
  TitleImage: string;
  Date: string;
  ReleaseYear: string;
  MpaRating: string;
  Category: string;
  Duration: string;
  VideoUrl?: string;
  Description: string;
}
const useVideos = () => {
  const [featured, setFeatured] = useState<VideoItem>(data.Featured);
  const [trending, setTrending] = useState<VideoItem[]>([]);

  useEffect(() => {
    const sorted = [...data.TendingNow].sort((a, b) => {
      return new Date(b.Date).getTime() - new Date(a.Date).getTime();
    });

    const lastViewedId = sessionStorage.getItem("lastViewedId");
    let sortedTrending = [...sorted];

    if (lastViewedId) {
      const lastViewedMovieIndex = sortedTrending.findIndex(
        (item) => item.Id === lastViewedId
      );
      if (lastViewedMovieIndex !== -1) {
        const [lastViewedMovie] = sortedTrending.splice(lastViewedMovieIndex, 1);
        sortedTrending.unshift(lastViewedMovie);
      }
    }
    
    setTrending(sortedTrending);
  }, []);

  const updateFeatured = (movie) => {
    setFeatured(movie);
    sessionStorage.setItem("lastViewedId", movie.Id);
  };

  return { featured, trending, updateFeatured };
};

export default useVideos;