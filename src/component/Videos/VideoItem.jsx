import React, { Fragment } from "react";
import Moment from "react-moment";
import "moment-timezone";
import "./video.css";

function VideoItem({ video, onSelect }) {
  return (
    <Fragment>
      <div className="list" onClick={() => onSelect(video)}>
        <div>
          <img
            src={video.snippet.thumbnails.medium.url}
            alt="thumbimg"
            className="thumbimg"
          />
        </div>
        <div className="details">
          <h5>{video.snippet.title}</h5>
          <p>{video.snippet.channelTitle}</p>
          <span>
            <Moment fromNow ago>
              {video.snippet.publishedAt}
            </Moment>
            &nbsp;ago
          </span>
        </div>
      </div>
      <hr />
    </Fragment>
  );
}

export default VideoItem;
