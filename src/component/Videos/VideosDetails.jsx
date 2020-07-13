import React, { Fragment } from "react";
import "./video.css";

function VideosDetails({ videosdata }) {
  if (!videosdata) {
    return "Loading......";
  } else {
    let VideoUrl = `https://www.youtube.com/embed/${videosdata.id.videoId}?version=3&loop=1&playlist=${videosdata.id.videoId}`;
    return (
      <Fragment>
        <div className="videoblock">
          <iframe
            src={VideoUrl}
            loop
            frameBorder="0"
            allow="accelerometer autoplay=1
                encrypted-media gyroscope picture-in-picture"
            allowFullScreen
            className="frame"
          ></iframe>
          <p className="heading">{videosdata.snippet.title}</p>
          <p className="title">{videosdata.snippet.channelTitle}</p>
          <p className="description">{videosdata.snippet.description}</p>
        </div>
      </Fragment>
    );
  }
}
export default VideosDetails;
