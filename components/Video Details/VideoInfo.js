import React from "react";
import { Card, CardHeader, Image } from "@nextui-org/react";

function duration(len) {
  let seconds = len % 60;
  let minutes = (len - seconds) / 60;
  let hours = 0;
  if (minutes > 59) {
    let tp = minutes % 60;
    hours = (minutes - tp) / 60;
    minutes = tp;
  }
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  if (hours > 0) {
    hours = hours < 10 ? `0${hours}` : hours;
    return `${hours}:${minutes}:${seconds}`;
  }
  return `${minutes}:${seconds}`;
}

const VideoInfo = ({ thumbnail, title, dur }) => {
  return (
    <Card className="video_info_card bg-transparent shadow-lg dark:bg-black/30 rounded-lg video_info_items border-small border-default-200 dark:border-default-100 py-5">
      <div className={`overflow-visible py-2`}>
        <Image
          alt={title}
          isBlurred
          className="object-cover rounded-lg video_info_image"
          src={thumbnail.url}
          loading="eager"
        />
      </div>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h3 className="text-tiny uppercase font-bold mb-2">{title}</h3>
        <h4 className="font-bold text-large">{`Duration: ${duration(dur)}`}</h4>
      </CardHeader>
    </Card>
  );
};

export default VideoInfo;
