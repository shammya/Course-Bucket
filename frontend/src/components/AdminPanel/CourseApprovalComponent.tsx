import { Grid } from "@material-ui/core";
import MaterialTable from "material-table";
import React, { useEffect } from "react";
import { useHistory } from "react-router";
import CourseApprovalService from "./api/CourseApprovalService.js";

interface IDataProps {
  id: number;
  title: string;
  teacherId: string;
  publishDate: string;
}
function CourseApproval(props) {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: "Id", field: "id", editable: false },
    { title: "Title", field: "title", editable: false },
    { title: "Teacher Username", field: "teacherId", editable: false },
    { title: "Publish Date", field: "publishDate", editable: false },
  ]);

  const [data1, setData1] = useState<IDataProps[]>([]);
  const [data2, setData2] = useState<IDataProps[]>([]);

  function getUnapprovedCourses() {
    CourseApprovalService.getUnapprovedCourses().then((response) => {
      console.log(response.data);
      //callData(response.data)
      setData1(response.data);
      //setData(response.data)
    });
  }
  function getApprovedCourses() {
    CourseApprovalService.getApprovedCourses().then((response) => {
      console.log(response.data);
      //callData(response.data)
      setData2(response.data);
      //setData(response.data)
    });
  }

  useEffect(() => {
    getApprovedCourses();
    getUnapprovedCourses();
    return () => {
      // setData1(null);
      // setData2(null);
    };
  }, []);

  // function insertIntoApproveList(data) {
  //   setData2([data, ...data2]);
  // }
  // function insertIntoUnapproveList(data) {
  //   setData1([data, ...data1]);
  // }
  function deleteFromApprove(idx) {
    let dataset = [...data2];
    dataset.splice(idx, 1);
    setData2(dataset);
  }
  function deleteFromUnapprove(idx) {
    let dataset = [...data2];
    dataset.splice(idx, 1);
    setData2(dataset);
  }

  const history = useHistory();
  return (
    <Grid container xs spacing={3}>
      <Grid item container>
        <MaterialTable
          style={{ width: "100%" }}
          // @ts-ignore
          columns={columns}
          title="Unapproved Courses"
          data={data1}
          options={{
            actionsColumnIndex: -1,
            addRowPosition: "first",
          }}
          actions={[
            {
              icon: "visibility",
              tooltip: "see course",
              onClick: (event, rowData) => {
                console.log(rowData);
                history.push(`/course/${(rowData as IDataProps).id}`);
              },
            },
            {
              icon: "checkcircle",
              tooltip: "approve course",
              onClick: (event, rowData) => {
                console.log(rowData);
                CourseApprovalService.approveCourse(
                  (rowData as IDataProps).id
                ).then((response) => {
                  getApprovedCourses();
                  getUnapprovedCourses();
                  // deleteFromUnapprove(rowData.tableData.id);
                  // insertIntoApproveList(rowData);
                });
              },
            },
          ]}
        />
      </Grid>
      <Grid item container>
        <MaterialTable
          style={{ width: "100%" }}
          // @ts-ignore
          columns={columns}
          title="Approved Courses"
          data={data2}
          options={{
            actionsColumnIndex: -1,
            addRowPosition: "first",
          }}
          actions={[
            {
              icon: "visibility",
              tooltip: "see course",
              onClick: (event, rowData) => {
                console.log(rowData);
                history.push(`/course/${(rowData as IDataProps).id}`);
              },
            },
            {
              icon: "cancel",
              tooltip: "unapprove course",
              onClick: (event, rowData) => {
                console.log(rowData);
                CourseApprovalService.unapproveCourse(
                  (rowData as IDataProps).id
                ).then((response) => {
                  getApprovedCourses();
                  getUnapprovedCourses();
                });
              },
            },
          ]}
        />
      </Grid>
    </Grid>
  );
}

export default CourseApproval;
