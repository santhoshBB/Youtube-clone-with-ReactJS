import React, { Fragment } from "react";
import VideoItem from "./VideoItem";
import "./video.css";

function VideoList({ videosdata, onSelect }) {
  const renderVideos = videosdata.map((data) => {
    return <VideoItem video={data} key={data.id.videoId} onSelect={onSelect} />;
  });
  return (
    <Fragment>
      <div className="listed">{renderVideos}</div>
    </Fragment>
  );
}

export default VideoList;
