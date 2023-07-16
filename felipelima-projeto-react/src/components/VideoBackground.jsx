import React from "react";
import MeuFilme from "../utils/MeuFilme.mp4";

const VideoBackground = () => {
  return (
    <div className="h-screen w-full relative">
      <div className="video-container">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover absolute top-0 left-0"
        >
          <source src={MeuFilme} type="video/mp4" />
          Desculpe, seu navegador não suporta vídeos HTML5.
        </video>

      </div>
    </div>
  );
};

export default VideoBackground;
