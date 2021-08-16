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
import AuthService from "components/auth/api/AuthService";
import StudentService from "../api/StudentService";
import { PurchaseHistory, ReviewList } from "classes/Course";
import { ReviewBox } from "components/course/courseView/Review";
import MaterialTable from "material-table";

export function PurchaseHistoryListView() {
  const history = useHistory();
  const [purchaseHistories, setPurchaseHistories] = useState<PurchaseHistory[]>(
    []
  );
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
  return (
    <MaterialTable
      // @ts-ignore
      columns={columns}
      title="Purchase History"
      data={purchaseHistories}
    />
  );
}
