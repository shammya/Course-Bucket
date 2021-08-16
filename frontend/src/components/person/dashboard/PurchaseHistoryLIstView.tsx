import { PurchaseHistory, PurchaseHistoryList } from "classes/Course";
import AuthService from "components/auth/api/AuthService";
import { ReviewBox } from "components/course/courseView/Review";
import CustomPagination from "layout/Pagination";
import MaterialTable from "material-table";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import StudentService from "../api/StudentService";
import TeacherService from "../api/TeacherService";
import { ContentHeader } from "./Dashboard";

function PurchaseHistoryTable({ data }) {
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
          // key={purchaseHistory.courseId}
          courseId={10}
          courseTitle={purchaseHistory.coursetitle}
          courseSubtitle={purchaseHistory.coursesubtitle}
          courseImage={purchaseHistory.courseImage}
        >
          <PurchaseHistoryTable data={purchaseHistory.purchaseHistoryInfos} />
        </ContentHeader>
      ))}
    </CustomPagination>
  );
}
