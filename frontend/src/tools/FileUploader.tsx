import { Grid } from "@material-ui/core";
import {
  AttachFile,
  InsertPhoto,
  PictureAsPdf,
  VideoCall,
} from "@material-ui/icons";
import {
  DropzoneAreaBase,
  DropzoneAreaBaseProps,
  FileObject,
} from "material-ui-dropzone";
import React, { useEffect, useState } from "react";

interface IFileUploader extends DropzoneAreaBaseProps {
  type?: "video" | "pdf" | "picture";
  onChange?: (files: FileObject[]) => void;
}

export function FileUploader(props: IFileUploader) {
  const {
    fileObjects,
    filesLimit,
    onChange,
    acceptedFiles,
    Icon,
    type,
    showPreviews,
    dropzoneText,
  } = props;
  const [state, setState] = useState({
    icon: Icon,
    acceptedFiles: acceptedFiles,
    fileObjects: fileObjects,
  });

  useEffect(() => {
    switch (type) {
      case "video":
        setState({
          ...state,
          icon: <VideoCall />,
          acceptedFiles: [".mp4", ".3gp"],
        });
        break;
      case "pdf":
        setState({
          ...state,
          icon: <PictureAsPdf />,
          acceptedFiles: [".pdf"],
        });
        break;
      case "picture":
        setState({
          ...state,
          icon: <InsertPhoto />,
          acceptedFiles: [".jpg", ".png", ".bmp", ".gif"],
        });
        break;
      default:
        setState({
          ...state,
          icon: <AttachFile />,
          acceptedFiles: [],
        });
    }
    setState({ ...state, fileObjects: fileObjects });
  }, []);

  function handleChange(files: FileObject[]) {
    if (filesLimit)
      files = files.slice(files.length - filesLimit, files.length);
    setState({ ...state, fileObjects: files });
    if (onChange) onChange(files);
  }

  return (
    <Grid item container>
      <DropzoneAreaBase
        {...props}
        //@ts-ignore
        Icon={state.Icon}
        classes={{ icon: state.fileObjects ? "display-none" : "" }}
        filesLimit={filesLimit}
        acceptedFiles={state.acceptedFiles}
        fileObjects={state.fileObjects}
        dropzoneText="Drop a file here or click here"
        maxFileSize={100000000}
        showPreviewsInDropzone
        // styles={{ position: "relative" }}
        onAdd={(newFileObjects) => {
          console.log("onAdd", newFileObjects);
          handleChange(fileObjects.concat(newFileObjects));
        }}
        previewGridProps={{
          container: {
            justifyContent: "flex-start",
            spacing: 0,
          },
          item: {},
        }}
        onDelete={(deleteFileObj) => {
          console.log("onDelete", deleteFileObj);
          handleChange(fileObjects.filter((item) => item != deleteFileObj));
        }}
      />
    </Grid>
  );
}