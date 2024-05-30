import React from "react";
import { NewCard } from "./moving-border";
import Image from "next/image";

export default async function Info() {
  return (
    <div className="bg-transparent pb-10 mx-4 mt-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col justify-center items-center">
        <h1 className="mb-8 text-3xl">Steps to download : </h1>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <NewCard
            key={(Math.random() + 3).toString()}
            dur={3500}
            con={"max-w-xl min-h-full"}
            className="flex max-w-xl min-h-full flex-col items-center justify-center p-4"
          >
            <Image
              priority
              className="w-[290px] h-[150px]"
              height={150}
              width={290}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png"
              alt="Step: 1 (Image)"
            />
            <p>
              {
                "Copy any youtube video url and paste it in the input so that the website will automatically search for formats and show you the list of currently available formats of the video."
              }
            </p>
          </NewCard>
          <NewCard
            key={(Math.random() + 3).toString()}
            dur={3600}
            con={"max-w-xl min-h-full"}
            className="flex max-w-xl min-h-fit flex-col items-center justify-center p-4"
          >
            <Image
              priority
              className="w-[290px] h-[150px]"
              height={150}
              width={290}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png"
              alt="Step: 2 (Image)"
            />
            <p>
              {
                "Now click on the download button which matches the formt of your choice after which a new tab will be opened and the episode title will be copied to your clipboard."
              }
            </p>
          </NewCard>
          <NewCard
            key={(Math.random() + 3).toString()}
            dur={3700}
            con={"max-w-xl min-h-full"}
            className="flex max-w-xl min-h-fit flex-col items-center justify-center p-4"
          >
            <Image
              priority
              className="w-[290px] h-[150px]"
              height={150}
              width={290}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png"
              alt="Step: 3 (Image)"
            />
            <p>
              {
                "Now right click on the video opened in the new tab and click {Save Video As...} which will open a dialog box asking video title. Now Paste(Ctrl + V) the title copied to your clipboard(From last page)."
              }
            </p>
          </NewCard>
        </div>
      </div>
    </div>
  );
}
