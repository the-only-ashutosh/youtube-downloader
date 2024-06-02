import React from "react";
import { Listbox, ListboxItem, Button } from "@nextui-org/react";
import { ListBoxWrapper } from "./ListBoxWrapper";
import ytdl from "ytdl-core";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function ListBox({
  data,
  title,
}: Readonly<{ data: Array<ytdl.videoFormat>; title: string }>) {
  const eleType = (quality: string, qualityLabel: string | null) => {
    if (qualityLabel) {
      return qualityLabel;
    } else if (quality === "tiny") {
      return "Mp3";
    } else {
      return quality;
    }
  };
  return (
    <ListBoxWrapper>
      <Listbox
        classNames={{
          base: "max-w-full",
          list: "max-h-[300px] overflow-scroll",
        }}
        items={data}
        label="Assigned to"
        variant="flat"
      >
        {(item) => {
          return (
            <ListboxItem
              key={(Math.random() + item.itag).toString()}
              textValue={item.quality.toString()}
            >
              <div className="flex gap-2 items-center flex-row justify-between">
                <div className="flex flex-col">
                  <span className="text-small">
                    {eleType(item.quality.toString(), item.qualityLabel)}
                  </span>
                  <span className="text-tiny text-default-400">{`Video: ${item.hasVideo} | Audio: ${item.hasAudio}`}</span>
                </div>
                <Link href={item.url} target="_blank" title={title}>
                  <CopyToClipboard
                    text={String(title)
                      .replaceAll("/", " ")
                      .replaceAll(`\\`, " ")
                      .replaceAll(":", " ")
                      .replaceAll("?", " ")
                      .replaceAll("*", " ")
                      .replaceAll(";", " ")
                      .replaceAll("|", " ")
                      .replaceAll(`"`, " ")
                      .replaceAll(">", " ")
                      .replaceAll("<", " ")}
                  >
                    <Button>Download</Button>
                  </CopyToClipboard>
                </Link>
              </div>
            </ListboxItem>
          );
        }}
      </Listbox>
    </ListBoxWrapper>
  );
}
