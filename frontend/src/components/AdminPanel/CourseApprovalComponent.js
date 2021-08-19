import React, { useEffect } from 'react'
import MaterialTable from 'material-table'
import CourseApprovalService from '../AdminPanel/api/CourseApprovalService.js'
import { Drawer, Grid } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { useHistory } from "react-router";


function CourseApproval(props) {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Id', field: 'id', editable: false },
    { title: 'Title', field: 'title', editable: false },
    { title: 'Teacher Username', field: 'teacherId', editable: false },
    { title: 'Publish Date', field: 'publishDate', editable: false }
  ])

  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])

  function getUnapprovedCourses() {
    CourseApprovalService.getUnapprovedCourses()
      .then(response => {
        console.log(response.data)
        //callData(response.data)          
        setData1(response.data);
        //setData(response.data)
      }
      )
  }
  function getApprovedCourses() {
    CourseApprovalService.getApprovedCourses()
      .then(response => {
        console.log(response.data)
        //callData(response.data)          
        setData2(response.data);
        //setData(response.data)
      }
      )
  }

  useEffect(() => {
    getApprovedCourses()
    getUnapprovedCourses()
  }, []);

  const history = useHistory();
  return (
    <Grid container xs spacing={3}>
      <Grid item container>
        <MaterialTable
          style={{ width: "100%" }}
          columns={columns}
          title="Unapproved Courses"
          data={data1}
          options={{
            actionsColumnIndex: -1, addRowPosition: "first"
          }}
          actions={[
            {
              icon: 'visibility',
              tooltip: 'see course',
              onClick: (event, rowData) => {
                console.log(rowData)
                history.push(`/course/${rowData.id}`)
              }
            },
            {
              icon: 'checkcirclesharp',
              tooltip: 'approve course',
              onClick: (event, rowData) => {
                console.log(rowData)
                CourseApprovalService.approveCourse(rowData.id)
                  .then(response => {
                    getApprovedCourses()
                    getUnapprovedCourses()
                  }
                  )
              }
            }
          ]}
        />
      </Grid>
      <Grid item container>
        <MaterialTable
          style={{ width: "100%" }}
          columns={columns}
          title="Approved Courses"
          data={data2}
          options={{
            actionsColumnIndex: -1, addRowPosition: "first"
          }}
          actions={[
            {
              icon: 'visibility',
              tooltip: 'see course',
              onClick: (event, rowData) => {
                console.log(rowData)
                history.push(`/course/${rowData.id}`)
              }
            },
            {
              icon: 'cancel',
              tooltip: 'unapprove course',
              onClick: (event, rowData) => {
                console.log(rowData)
                CourseApprovalService.unapproveCourse(rowData.id)
                  .then(response => {
                    getApprovedCourses()
                    getUnapprovedCourses()
                  }
                  )
              }
            }
          ]}
        />
      </Grid>

    </Grid>


  )
}

export default CourseApproval