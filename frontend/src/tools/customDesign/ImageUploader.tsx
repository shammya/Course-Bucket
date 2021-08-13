import { Button, Grid } from "@material-ui/core";
import { Files } from "classes/Files";
import { FileObject } from "material-ui-dropzone";
import React, { useEffect, useState } from "react";
import { FileUploader } from "tools/FileUploader";
import { ErrorMessage } from "tools/Tools";

export function ImageUploader({
  imageDestination,
  title,
  onSetClick,
  onDeleteClick,
}) {
  const [upload, setUpload] = useState(false);
  const [files, setFiles] = useState<FileObject[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  console.log(imageDestination);
  useEffect(() => {
    if (!imageDestination) {
      setUpload(true);
    } else {
      setUpload(false);
    }
  }, [imageDestination]);
  return (
    <>
      <ErrorMessage
        open={showErrorMessage}
        message={errorMessage}
        onClose={setShowErrorMessage}
      />
      {upload && (
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <FileUploader
              fileObjects={files}
              type="picture"
              filesLimit={1}
              onChange={(files) => setFiles(files)}
            />
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            spacing={2}
          >
            <Grid item>
              <Button
                color="primary"
                onClick={(event) => {
                  if (files[0]) {
                    let file = new Files("PICTURE", title)
                      .setFile(files[0])
                      .setId(imageDestination.id);
                    onSetClick(file);
                    setUpload(false);
                  } else {
                    setErrorMessage("Please upload a photo!!");
                    setShowErrorMessage(true);
                  }
                }}
              >
                Set
              </Button>
            </Grid>
            {imageDestination && (
              <Grid item>
                <Button color="secondary" onClick={(event) => setUpload(false)}>
                  Cancel
                </Button>
              </Grid>
            )}
          </Grid>
        </Grid>
      )}
      {!upload && (
        <Grid container direction="column" spacing={1}>
          <Grid item container justifyContent="center">
            {console.log(imageDestination)}
            <img
              src={
                imageDestination?.content?.file
                  ? URL.createObjectURL(imageDestination?.content?.file)
                  : imageDestination?.content
              }
              style={{
                width: "90%",
                boxShadow: "rgb(0 0 0 / 12%) 0 1px 6px",
              }}
            />
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            spacing={2}
          >
            <Grid item>
              <Button color="primary" onClick={(event) => setUpload(true)}>
                Change
              </Button>
            </Grid>
            <Grid item>
              <Button
                color="secondary"
                onClick={(event) => {
                  onDeleteClick(event);
                  setFiles([]);
                  setUpload(true);
                }}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}
