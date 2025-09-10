import React from "react";

const Video = ({ className }) => {
  return (
    <div>
      <video
        className={`w-full h-screen   object-cover ${className}`}
        autoPlay
        loop
        muted
        playsInline
        src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1757526390~exp=1757529990~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=0dd7b84d59383a47bc77abd572347841704bbda448936afaf8f1442a8509c655&r=dXMtd2VzdDE%3D"
      ></video>
    </div>
  );
};

export default Video;
