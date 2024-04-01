import React from "react";
import moment from "moment";

const VideoLength = ({ time }) => {
    const videoLength = moment().startOf("day").seconds(time);
    let videoLengthFormatted;

    if (videoLength.hours() > 0) {
        videoLengthFormatted = videoLength.format("H:mm:ss");
    } else {
        videoLengthFormatted = videoLength.format("mm:ss");
    }

    return (
        <span className="absolute bottom-2 right-2 bg-black py-1 px-1 text-white text-xs rounded-md">
            {videoLengthFormatted}
        </span>
    );
}

export default VideoLength;
