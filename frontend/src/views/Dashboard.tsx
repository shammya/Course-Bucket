import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { Image, RateReview } from "@material-ui/icons";
import FAQBox from "components/courseView/FAQ";
import ReviewBox from "components/courseView/Review";
import DrawerLayout, { DrawerLayoutObject } from "layout/DrawerLayout";
import CustomPagination from "layout/Pagination";
import MaterialTable from "material-table";
import React, { useState } from "react";
import { FaChalkboardTeacher, FaDollarSign, FaQq } from "react-icons/fa";

function ContentHeader({ children }) {
  return (
    <Card>
      <CardContent>
        <CardActionArea>
          <Grid container direction="row" wrap="nowrap">
            <Grid item>
              <Image />
            </Grid>
            <Grid item container direction="column">
              <Grid item>
                <Typography variant="h5">Course title</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">Course subtitle</Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardActionArea>
        {children}
      </CardContent>
    </Card>
  );
}

interface PurchaseHistory {
  image: JSX.Element;
  courseName: string;
  studentImage: JSX.Element;
  studentName: string;
  time: Date;
  amount: number;
}

function Dashboard() {
  const [columns, setColumns] = useState([
    { title: "Course Image", field: "image" },
    { title: "Course Name", field: "courseName" },
    { title: "Student Image", field: "studentImage" },
    { title: "Student Name", field: "studentName" },
    { title: "Purchase time", field: "time" },
    { title: "Purchase Amount", field: "amount" },
    // { title: "Course Image", field: "image", editable: "never" },
    // { title: "Course Name", field: "courseName", editable: "never" },
    // { title: "Student Image", field: "studentImage", editable: "never" },
    // { title: "Student Name", field: "studentName", editable: "never" },
    // { title: "Purchase time", field: "time", editable: "never" },
    // { title: "Purchase Amount", field: "amount", editable: "never" },
  ]);
  const [data, setData] = useState([
    {
      image: <Image />,
      courseName: "Course Name Course Name Course Name Course Name Course Name",
      studentImage: <Image />,
      studentName: "StudentName",
      time: new Date().toDateString(),
      amount: 3000,
    },
  ]);
  const objects: Array<DrawerLayoutObject> = [
    {
      label: "Purchase History",
      icon: <FaDollarSign />,
      content: (
        <MaterialTable
          // @ts-ignore
          columns={columns}
          title="Purchase History"
          data={data}
        />
      ),
    },
    {
      label: "Reviews",
      icon: <RateReview />,
      content: (
        <CustomPagination objectsPerPage={3}>
          {[1, 2, 3, 4, 5].map((item) => (
            <Grid item>
              <ContentHeader>
                <CustomPagination type="two-item-per-line" objectsPerPage={2}>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <ReviewBox />
                  ))}
                </CustomPagination>
              </ContentHeader>
            </Grid>
          ))}
        </CustomPagination>
      ),
    },
    {
      label: "FAQ",
      icon: <FaQq />,
      content: (
        <CustomPagination objectsPerPage={3}>
          {[1, 2, 3, 4, 5].map((item) => (
            <Grid item>
              <ContentHeader>
                <CustomPagination type="one-item-per-line" objectsPerPage={2}>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <FAQBox />
                  ))}
                </CustomPagination>
              </ContentHeader>
            </Grid>
          ))}
        </CustomPagination>
      ),
    },
    {
      label: "Student List",
      icon: <FaChalkboardTeacher />,
      content: (
        <CustomPagination objectsPerPage={3}>
          {[1, 2, 3, 4, 5].map((item) => (
            <ContentHeader>
              <CustomPagination type="calculate-by-width">
                {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 1, 1].map(
                  (item) => (
                    <Card>
                      <CardActionArea>
                        <CardMedia>
                          <Image />
                        </CardMedia>
                        <CardContent>
                          <Grid container direction="column">
                            <Grid item>
                              <Typography variant="h6">Student Name</Typography>
                            </Grid>
                            <Grid item>
                              <Typography variant="body2">
                                Enrolled Date
                              </Typography>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  )
                )}
              </CustomPagination>
            </ContentHeader>
          ))}
        </CustomPagination>
      ),
    },
  ];
  return <DrawerLayout objects={objects} />;
}

export default Dashboard;
