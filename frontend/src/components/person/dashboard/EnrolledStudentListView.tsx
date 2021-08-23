import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { StudentList } from "classes/Person";
import CustomPagination from "layout/Pagination";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import TeacherService from "../api/TeacherService";
import { ContentHeader } from "./Dashboard";

export function EnrolledStudentListView() {
  const history = useHistory();
  const [studentsWithCourses, setStudentsWithCourses] = useState<StudentList[]>(
    []
  );
  useEffect(() => {
    TeacherService.getEnrolledStudentList().then((response) => {
      console.log("Enrolled Student List", response.data);
      setStudentsWithCourses(response.data);
    });
  }, []);
  return (
    <CustomPagination
      objectsPerPage={3}
      noContentText="You have no enrolled student"
    >
      {studentsWithCourses?.map((studentsWithCourse) => (
        <ContentHeader
          key={studentsWithCourse.courseId}
          courseId={studentsWithCourse.courseId}
          courseTitle={studentsWithCourse.courseName}
          courseSubtitle={studentsWithCourse.courseSubtitle}
          courseImage={studentsWithCourse.courseImage}
        >
          <CustomPagination type="calculate-by-width">
            {studentsWithCourse?.studentInfoList?.map((student) => (
              <Card
                key={student.studentUsername}
                style={{ backgroundColor: "#546e7a" }}
              >
                <CardActionArea
                  onClick={(event) =>
                    history.push(`/profile/${student.studentUsername}`)
                  }
                >
                  <CardMedia>
                    <img src={student.studentImage} />
                  </CardMedia>
                  <CardContent>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography variant="h6">
                          {student.studentName}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2">
                          {new Date(student.enrolledDate).toLocaleDateString()}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </CustomPagination>
        </ContentHeader>
      ))}
    </CustomPagination>
  );
}
