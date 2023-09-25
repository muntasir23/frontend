// import React from 'react'
import ReactPlayer from "react-player/youtube";

function Player() {
  const videoUrl = `https://www.youtube.com/watch?v=xEALTVLxrDw&list=RDxEALTVLxrDw&start_radio=1`;
  return (
    <div>
      <ReactPlayer url={videoUrl} controls />
    </div>
  );
}

export default Player;
