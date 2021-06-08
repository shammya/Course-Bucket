import { Grid } from '@material-ui/core';
import { DropzoneAreaBase } from 'material-ui-dropzone';
import React, { useState } from 'react';

export function FileUploader(props) {
  // const handlePreviewIcon = (fileObject, classes) => {
  //   const { type } = fileObject.file
  //   const iconProps = {
  //     className: classes.image,
  //   }

  //   if (type.startsWith("video/")) return <Theaters {...iconProps} />
  //   // if (type.startsWith("audio/")) return <AudioTrack {...iconProps} />

  //   switch (type) {
  //     case "application/msword":
  //     case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
  //       return <Description {...iconProps} />
  //     case "application/pdf":
  //       return <PictureAsPdf {...iconProps} />
  //     default:
  //       return <AttachFile {...iconProps} />
  //   }
  // }

  const [fileObjects, setFileObjects] = useState([]);

  return (
    <Grid item>
      <DropzoneAreaBase
        // Icon={<Icon><VideoCall /></Icon>}
        fileObjects={fileObjects}
        dropzoneText="Drop a file here or click here"
        showFileNames
        showFileNamesInPreview
        maxFileSize={100000000}
        styles={{ position: "relative" }}

        onAdd={newFileObjs => {
          console.log('onAdd', newFileObjs);
          setFileObjects([].concat(fileObjects, newFileObjs));
        }}
        onDelete={deleteFileObj => {
          console.log('onDelete', deleteFileObj);
        }}
      />
    </Grid>
  )
}