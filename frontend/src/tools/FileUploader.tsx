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
    showPreviewsInDropzone,
    classes,
    ...rest
  } = props;
  const [state, setState] = useState({
    icon: Icon,
    acceptedFiles: acceptedFiles,
    fileObjects: fileObjects,
  });

  useEffect(() => {
    const abortController = new AbortController();
    switch (type?.toLowerCase()) {
      case "video":
        console.log("in use effect");
        setState({
          ...state,
          icon: <VideoCall />,
          acceptedFiles: [".mp4", ".3gp"],
          fileObjects: fileObjects,
        });
        break;
      case "pdf":
        setState({
          ...state,
          icon: <PictureAsPdf />,
          acceptedFiles: [".pdf"],
          fileObjects: fileObjects,
        });
        break;
      case "picture":
        setState({
          ...state,
          icon: <InsertPhoto />,
          acceptedFiles: [".jpg", ".png", ".bmp", ".gif"],
          fileObjects: fileObjects,
        });
        break;
      default:
        setState({
          ...state,
          icon: <AttachFile />,
          acceptedFiles: [],
          fileObjects: fileObjects,
        });
    }
    return () => abortController.abort();
  }, [type, fileObjects]);

  function handleChange(files: FileObject[]) {
    // if (filesLimit)
    //   files = files.slice(files.length - filesLimit, files.length);
    setState({ ...state, fileObjects: files });
    if (onChange) onChange(files);
  }
  return (
    <Grid item container>
      <DropzoneAreaBase
        {...rest}
        //@ts-ignore
        Icon={state.Icon}
        classes={{ ...classes, icon: state.fileObjects ? "display-none" : "" }}
        filesLimit={filesLimit}
        acceptedFiles={state.acceptedFiles}
        fileObjects={state.fileObjects}
        dropzoneText="Drop a file here or click here"
        maxFileSize={100000000}
        showPreviewsInDropzone={showPreviewsInDropzone}
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
