"use client";
import React, { useState } from "react";
import { BackgroundGrad } from "./Background";
import SearchInput from "./Input/SearchInput";
import VideoInfo from "./Video Details/VideoInfo";
import axios from "axios";
import ListBox from "./ListBox/ListBox";
import { Text } from "@radix-ui/themes";

const MainComp = () => {
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(false);
  const search = async (url) => {
    setLoading(true);
    setShow(null);
    await axios
      .post("/api/checkvideos", {
        body: JSON.stringify({ url: url }),
      })
      .then(({ data }) => {
        if (data) {
          setShow(JSON.parse(data));
          setLoading(false);
        }
      })
      .catch((e) => {
        setLoading(false);
      });
  };
  const initial = () => {
    setShow(null);
  };
  return (
    <div>
      <div className="flex justify-center items-center flex-col my-8">
        <h1 className="mb-2 text-lg font-bold">Download Youtube Videos : </h1>
        <BackgroundGrad className="w-[66vw] h-[11vh] rounded-md">
          <SearchInput onSearch={search} ini={initial} loading={loading} />
        </BackgroundGrad>
      </div>
      <div
        className={
          "flex relative bottom-0" +
          (show && Object.keys(show)[0] === "error"
            ? " justify-center items-center"
            : " video_info_cover")
        }
      >
        {show && Object.keys(show)[0] !== "error" && (
          <VideoInfo
            dur={show.videoInfo.length}
            title={show.videoInfo.title}
            thumbnail={show.videoInfo.thumbnail}
          />
        )}
        {show && Object.keys(show)[0] !== "error" && (
          <ListBox data={show.format} title={show.videoInfo.title} />
        )}
        {show && Object.keys(show)[0] === "error" && (
          <Text>No Video found.</Text>
        )}
      </div>
    </div>
  );
};

export default MainComp;
