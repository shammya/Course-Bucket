import { authHeaders } from "components/auth/api/AuthService";
import MUIRichTextEditor from "mui-rte";
import React, { useEffect, useState } from "react";
import VideoPlayer from "tools/customDesign/VideoPlayer";
import { LectureOutputProps, OutputLayout } from "./OutputLayout";

export function VideoOutput({ editable, file, onUpdate }: LectureOutputProps) {
  const [videoUrl, setVideoUrl] = useState<string | null>("");
  useEffect(() => {
    // axios.get(url, authHeaders()).then((response) => {
    //   console.log("video is loaded", response.data);
    //   setFile(response.data);
    // });
    // return () => {
    //   setFile("");
    // };
    if (file?.content && file?.content?.file == undefined) videoFetch();
    else if (file?.content?.file)
      setVideoUrl(URL.createObjectURL(file?.content?.file));
    return () => setVideoUrl(null);
  }, [file.content]);
  async function videoFetch() {
    const result = await fetch(
      file.content,
      // @ts-ignore
      authHeaders()
    );
    console.log("video fetched");
    const blob = await result.blob();
    if (blob) {
      setVideoUrl(URL.createObjectURL(blob));
    }
  }
  return (
    <OutputLayout editable={editable} onUpdate={onUpdate}>
      <VideoPlayer url={videoUrl as string} />
      <MUIRichTextEditor readOnly toolbar={false} defaultValue={file.title} />
    </OutputLayout>
  );
}
