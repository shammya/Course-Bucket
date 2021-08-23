import { Button, Grid, IconButton } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Delete } from "@material-ui/icons";
import { Slider } from "classes/Files";
import { FileObject } from "material-ui-dropzone";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import GridImageView from "tools/customDesign/ImageVeiw";
import ShadowText from "tools/customDesign/ShadowText";
// import { ReactSortable } from "react-sortablejs";
import { FileUploader } from "tools/FileUploader";
import { Files } from "./../../classes/Files";
import SliderService from "./api/SliderService";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      width: 500,
      height: 450,
      overflow: "visible",
    },
    icon: {
      color: "rgba(255, 255, 255)",
      border: "2px solid #b0bec5",
    },
  })
);
interface IFileObject extends FileObject {
  id: number;
}
export default function BasicImageList() {
  const [sliders, setSliders] = useState<Slider[]>([]);
  const [files, setFiles] = useState<FileObject[]>([]);
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  console.log("print from body of slider", sliders);

  useEffect(() => {
    loadSlider();
  }, []);

  function loadSlider() {
    SliderService.getSliders().then((response) => {
      console.log("Sliders: ", response.data);
      setSliders(response.data);
    });
  }

  async function handleUploadClick() {
    for (const fileObject of files) {
      let file = new Files("PICTURE", "SLIDER").setFile(fileObject);
      await file.upload();
      let slider = { file: file };
      await SliderService.addSlider(slider).then((response) => {
        console.log("Slider uploaded ", file.id);
      });
    }
    await setFiles([]);
    enqueueSnackbar("Uploaded successfully", { variant: "success" });
    console.log("files rest to []");
    loadSlider();
  }

  async function deleteSlider(id: number) {
    await SliderService.deleteSlider(id);
    enqueueSnackbar("Deleted successfully", { variant: "success" });
    loadSlider();
  }

  function updateSerial(sliders: Slider[]) {
    setSliders(sliders);
    console.log(sliders);
    SliderService.updateSerial(
      sliders.map((slider, index) => ({ ...slider, serial: index + 1 }))
    );
  }

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      spacing={2}
    >
      <Grid item container spacing={2}>
        {!sliders || sliders.length == 0 ? (
          <Grid
            container
            direction="column"
            spacing={4}
            style={{ padding: "100px 0px" }}
          >
            <Grid item>
              <ShadowText>No slider image available</ShadowText>
            </Grid>
            <Grid item>
              <ShadowText>Please upload some banner</ShadowText>
            </Grid>
          </Grid>
        ) : (
          <ReactSortable
            list={sliders}
            setList={updateSerial}
            className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-item"
          >
            {sliders.map((slider, index) => (
              <Grid
                item
                container
                direction="column"
                xs={12}
                sm={6}
                key={index}
                justifyContent="center"
                style={{ position: "relative" }}
              >
                <Grid item>
                  <GridImageView
                    item
                    src={slider.file.content}
                    options={
                      <IconButton
                        className={classes.icon}
                        onClick={(event) => deleteSlider(slider.id)}
                      >
                        <Delete />
                      </IconButton>
                    }
                  />
                </Grid>
              </Grid>
            ))}
          </ReactSortable>
        )}
      </Grid>
      <Grid item container>
        <FileUploader
          classes={{ text: "color-white" }}
          fileObjects={files}
          onChange={setFiles}
          filesLimit={10}
          type="picture"
        />
      </Grid>
      {files.length > 0 && (
        <Grid item container>
          <Grid container direction="row" justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleUploadClick}
              >
                Upload
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
