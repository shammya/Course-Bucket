import {
  Button,
  Grid,
  IconButton,
  ImageListItemBar,
  ListSubheader,
} from "@material-ui/core";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Info } from "@material-ui/icons";
import { FileObject } from "material-ui-dropzone";
import React, { useState } from "react";
// import { ReactSortable } from "react-sortablejs";
import { FileUploader } from "tools/FileUploader";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
  })
);
interface IFileObject extends FileObject {
  id: number;
}
export default function BasicImageList() {
  const [files, setFiles] = useState<IFileObject[]>([]);
  const [tempFiles, setTempFiles] = useState<FileObject[]>([]);
  const classes = useStyles();

  function handleUploadClick() {
    setFiles([
      ...files,
      ...tempFiles.map((file, index) => ({ id: index, ...file })),
    ]);
    setTempFiles([]);
  }
  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div">December</ListSubheader>
        </ImageListItem>
        {/* <ReactSortable
          list={files}
          setList={setFiles}
          style={{ width: "100%" }}
        > */}
        {files.map((file, index) => (
          <ImageListItem key={index}>
            <img src={URL.createObjectURL(file.file)} />
            <ImageListItemBar
              title={"Ok"}
              subtitle={<span>by: {"kono author nai"}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${"file.title"}`}
                  className={classes.icon}
                >
                  <Info />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
        {/* </ReactSortable> */}
      </ImageList>
      <FileUploader
        fileObjects={tempFiles}
        onChange={setTempFiles}
        filesLimit={10}
        type="picture"
      />
      {tempFiles.length > 0 && (
        <Grid container direction="row" justifyContent="center">
          <Grid item>
            <Button color="primary" onClick={handleUploadClick}>
              Upload
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
