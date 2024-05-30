import { NextResponse, NextRequest } from "next/server";
import ytdl from "ytdl-core";

export async function POST(req: NextRequest) {
  const { body } = await req.json();
  const url = JSON.parse(body).url;
  const itag: Array<number> = [
    18, 22, 37, 38, 43, 44, 45, 46, 82, 83, 84, 85, 136, 137, 138, 139, 140,
    141,
  ];
  try {
    let data = await ytdl.getInfo(url);
    const formats: Array<ytdl.videoFormat> = [];
    itag.forEach((tag) => {
      formats.push(
        ...data.formats.filter((e) => {
          const tp = filterByExtension(e, tag);
          return tp.mp3 || tp.mp4 || tp.mp4WithoutAudio;
        })
      );
    });
    const response = {
      format: formats.map((e) => {
        return {
          hasAudio: e.hasAudio,
          hasVideo: e.hasVideo,
          url: e.url,
          container: e.container,
          mimeType: e.mimeType,
          quality: e.quality,
          qualityLabel: e.qualityLabel,
          itag: e.itag,
        };
      }),
      videoInfo: {
        title: data.videoDetails.title,
        length: data.videoDetails.lengthSeconds,
        thumbnail: data.videoDetails.thumbnails[0],
      },
    };
    return NextResponse.json(JSON.stringify(response));
  } catch (e) {
    return NextResponse.json(JSON.stringify({ error: e }));
  }
}

const filterByExtension = (format: ytdl.videoFormat, itag: number) => ({
  mp3: format.hasAudio && !format.hasVideo && format.itag === itag,
  mp4: format.hasAudio && format.hasVideo && format.itag === itag,
  mp4WithoutAudio: !format.hasAudio && format.hasVideo && format.itag === itag,
});
