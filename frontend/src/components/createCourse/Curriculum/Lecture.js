import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, IconButton, TextField, Typography } from "@material-ui/core";
import { AddCircleOutline, Cancel, CheckCircle, DeleteForever, Edit, ExpandMore, ImportExport, PictureAsPdf, TextFields, VideoCall } from "@material-ui/icons";
import LinkIcon from '@material-ui/icons/Link';
import React, { useState } from "react";
import { ArticleInput } from './ArticleInput';
import { ArticleOutput } from './ArticleOutput';
import { LinkInput } from './LinkInput';
import { LinkOutput } from './LinkOutput';
import { PDFInput } from './PDFInput';
import { PDFOutput } from './PDFOutput';
import { VideoInput } from './VideoInput';
import { VideoOutput } from './VideoOutput';
export function Lecture({
  lecture = {
    id: 0,
    name: "Lecture name is here...",
    type: '',
    file: {
      title: 'Title',
      body: '',
    }
  },
  onLectureAdd,
  onLectureRemove
}) {
  const [state, setState] = useState({
    expanded: false,
    body: 'LECTURE_TYPE',
    no: 1,
    fieldValue: lecture.name,
    editMode: false,
    lecture: lecture,
  });
  function handleBodyChange(body) {
    setState({ ...state, body: body });
  }
  // function handleContentClick(panel) {
  //   setState({
  //     ...state,
  //     expanded: state.contentClicked ? '' : panel
  //   })
  // }
  function handleOnSave(type, file) {
    console.log(file);
    setState({
      ...state,
      body: type + "_OUTPUT",
      lecture: {
        ...state.lecture,
        type: type,
        file: file
      }
    });
  }
  function handleOnCancel() {
    setState({
      ...state,
      body: state.lecture.type === '' ? "LECTURE_TYPE" : state.lecture.type + "_OUTPUT"
    });
  }
  function handleOnUpdate(file) {
    setState({
      ...state,
      body: state.lecture.type + "_INPUT"
    })
  }

  function LectureType() {
    return (
      < Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <IconButton onClick={event => handleBodyChange('ARTICLE_INPUT')}>
          <Grid item container direction="column" alignItems="center">
            <TextFields />
            <Typography>Article</Typography>
          </Grid>
        </IconButton>
        <IconButton onClick={event => handleBodyChange('VIDEO_INPUT')}>
          <Grid item container direction="column" alignItems="center">
            <VideoCall />
            <Typography>Video</Typography>
          </Grid>
        </IconButton>
        <IconButton onClick={event => handleBodyChange('PDF_INPUT')}>
          <Grid item container direction="column" alignItems="center">
            <PictureAsPdf />
            <Typography>PDF</Typography>
          </Grid>
        </IconButton>
        <IconButton onClick={event => handleBodyChange('LINK_INPUT')}>
          <Grid item container direction="column" alignItems="center">
            <LinkIcon />
            <Typography>Link</Typography>
          </Grid>
        </IconButton>
      </Grid>
    )
  }

  function LectureRow() {
    return (
      <>
        {
          !state.editMode &&
          <>
            {/* <IconButton>
              <ImportExport />
            </IconButton> */}
            <IconButton>
              <AddCircleOutline onClick={onLectureAdd} />
            </IconButton>
            <IconButton>
              <Edit onClick={event => setState({ ...state, editMode: true })} />
            </IconButton>
            <IconButton>
              <DeleteForever onClick={onLectureRemove} />
            </IconButton>
            <Typography>Lecture {state.no} :</Typography>
            <Typography> {state.lecture.name}</Typography>
            {
              !state.expanded && state.lecture.type === '' && <Button
                variant="outlined"
                color="primary"
                onClick={event => setState({ ...state, expanded: !state.expanded })}
              >Content +</Button>
            }
            {
              state.expanded && state.lecture.type === '' &&
              <IconButton onClick={event => setState({ ...state, body: "LECTURE_TYPE", expanded: !state.expanded })}>
                <Cancel />
              </IconButton>
            }
          </>
        }
        {
          state.editMode &&
          <>
            <TextField
              variant="outlined"
              fullWidth
              defaultValue={state.fieldValue}
              onBlur={event => setState({ ...state, fieldValue: event.target.value })}
            />
            <IconButton>
              <CheckCircle onClick={event => { setState({ ...state, editMode: false, lecture: { ...state.lecture, name: state.fieldValue } }) }} />
            </IconButton>
            <IconButton>
              <Cancel onClick={event => setState({ ...state, editMode: false, fieldValue: state.lecture.name })} />
            </IconButton>
          </>
        }
      </>
    )
  }

  return (
    <Accordion key={lecture.id} expanded={state.expanded} style={{ backgroundColor: 'pink' }}>
      <AccordionSummary
        expandIcon={
          state.lecture.type !== '' &&
          <ExpandMore onClick={event => setState({ ...state, expanded: !state.expanded })} />
        }
      >
        <LectureRow />
      </AccordionSummary>
      <AccordionDetails>
        {state.body === "LECTURE_TYPE" && <LectureType />}

        {state.body === "ARTICLE_INPUT" && <ArticleInput file={state.lecture.file} onSave={(file) => handleOnSave('ARTICLE', file)} onCancel={handleOnCancel} />}
        {state.body === "VIDEO_INPUT" && <VideoInput />}
        {state.body === "PDF_INPUT" && <PDFInput />}
        {state.body === "LINK_INPUT" && <LinkInput />}

        {/* {
          state.lecture.file != undefined &&
          <> */}
        {state.body === "ARTICLE_OUTPUT" && <ArticleOutput file={state.lecture.file} onUpdate={handleOnUpdate} />}
        {state.body === "VIDEO_OUTPUT" && <VideoOutput />}
        {state.body === "PDF_OUTPUT" && <PDFOutput />}
        {state.body === "LINK_OUTPUT" && <LinkOutput />}
        {/* </>
        } */}
      </AccordionDetails>
    </Accordion >
  )
}