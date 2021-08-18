import { Avatar, Grid, IconButton, Link } from "@material-ui/core";
import { PurchaseHistoryList } from "classes/Course";
import AuthService from "components/auth/api/AuthService";
import CustomPagination from "layout/Pagination";
import MaterialTable from "material-table";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import StudentService from "../api/StudentService";
import TeacherService from "../api/TeacherService";
import { ContentHeader } from "./Dashboard";

function PurchaseHistoryTable({ data }) {
  const history = useHistory();
  data = data.map((item) => ({
    person:
      AuthService.getCurrentAccountType() === "Teacher"
        ? {
            name: item.studentName,
            image: item.studentImage,
            username: item.studentUsername,
          }
        : {
            name: item.teacherName,
            image: item.teacherImage,
            username: item.teacherUsername,
          },
    time: new Date(item.purchaseTime).toLocaleString(),
    amount: item.purchaseAmount,
  }));
  const [columns, setColumns] = useState([
    {
      title:
        AuthService.getCurrentAccountType() === "Teacher"
          ? "Student"
          : "Teacher",
      field: "student",
      render: (rowData) => (
        <Grid container direction="row" spacing={1} alignItems="center">
          <Grid item>
            <IconButton
              onClick={() =>
                history.push(`/profile/${rowData.person.username}`)
              }
            >
              <Avatar src={rowData.person.image} />
            </IconButton>
          </Grid>
          <Grid item>
            <Link variant="h6" href={`/profile/${rowData.person.username}`}>
              {rowData.person.name}
            </Link>
          </Grid>
        </Grid>
      ),
    },
    { title: "Purchase time", field: "time" },
    { title: "Purchase Amount", field: "amount" },
  ]);
  return (
    <MaterialTable
      // @ts-ignore
      columns={columns}
      title=""
      data={data}
      options={{ search: false, toolbar: false }}
    />
  );
}

export function PurchaseHistoryListView() {
  const history = useHistory();
  const [purchaseHistories, setPurchaseHistories] = useState<
    PurchaseHistoryList[]
  >([]);
  useEffect(() => {
    switch (AuthService.getCurrentAccountType()) {
      case "Student":
        StudentService.getPurchaseHistory().then((response) => {
          console.log("Purchase History List", response.data);
          setPurchaseHistories(response.data);
        });
        break;
      case "Teacher":
        TeacherService.getPurchaseHistory().then((response) => {
          console.log("Purchase History List", response.data);
          setPurchaseHistories(response.data);
        });
        break;
    }
  }, []);

  return (
    <CustomPagination objectsPerPage={3}>
      {purchaseHistories?.map((purchaseHistory) => (
        <ContentHeader
          key={purchaseHistory.courseId}
          courseId={purchaseHistory.courseId}
          courseTitle={purchaseHistory.courseTitle}
          courseSubtitle={purchaseHistory.courseSubtitle}
          courseImage={purchaseHistory.courseImage}
        >
          <PurchaseHistoryTable data={purchaseHistory.purchaseHistoryInfos} />
          {/* {AuthService.getCurrentAccountType() === "Student" && (
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <Grid item container justifyContent="flex-start">
                <Grid item>
                  <Avatar src={""} />
                </Grid>
                <Grid item>
                  <Typography variant="h6">{}</Typography>
                </Grid>
              </Grid>
              <Grid item>{"Date"}</Grid>
              <Grid item>{"Cost"}</Grid>
            </Grid>
          )} */}
        </ContentHeader>
      ))}
    </CustomPagination>
  );
}
