import { Category } from "./Category";
import { Files } from "./Files";
import { Language } from "./Language";
import { Student, Teacher } from "./Person";

export class Course {
  teacherName: string;
  teacherUsername: string;
  id: number;
  title: string;
  subTitle: string;
  description: string;
  mainPrice: number;
  off: number;
  cover: Files;
  publishDate: Date;
  lastUpdate: Date;
  isApproved: Boolean;
  teacher: Teacher;
  mainCategory: Category;
  subCategory: Category;
  languages: Array<Language>;
  properties: Array<Property>;
  rating: number;
  reviews: Array<Review>;
  numOfStudents: number;
  prerequisites: Array<string>;
  outcomes: Array<string>;
  weeks: Array<Week>;
  level: string;
  promo: PromoCode;

  constructor() {
    this.mainPrice = 0;
    this.languages = [];
    this.properties = [];
    this.prerequisites = [];
    this.outcomes = [];
    this.weeks = [new Week().setWeekNo(1)];
  }
}

export class MiniCourse {
  id: number;
  title: string;
  teacherName: string;
  coverContent: string;
  rating: number;
  ratingCount: number;
  price: number;
  off: number;
}

export class CarouselCourse {
  newReleased: MiniCourse[];
  bestSeller: MiniCourse[];
  mostReviewed: MiniCourse[];
  mostRated: MiniCourse[];
  free: MiniCourse[];
}

export class Lecture {
  id: number;
  lectureNo: number;
  title: string;
  lastUpdate: Date;
  file: Files;
  preview: boolean;

  constructor(title: string = "Lecture Title") {
    this.preview = false;
    this.title = title;
  }
  setLectureNo(lectureNo: number) {
    this.lectureNo = lectureNo;
    return this;
  }
}

export class Week {
  id: number;
  weekNo: number;
  title: string;
  lastUpdate: Date;
  lectures: Array<Lecture>;

  constructor(title: string = "Week Title") {
    this.title = title;
    this.lectures = [new Lecture().setLectureNo(1)];
  }
  setWeekNo(weekNo: number) {
    this.weekNo = weekNo;
    return this;
  }
}

export class FAQ {
  id: number;
  question: string;
  answer: string;
  questionTime: Date;
  answerTime: Date;
  student: Student;
  teacher: Teacher;
  courseId: number;
}

export class FaqList {
  courseId: number;
  courseTitle: string;
  courseSubtitle: string;
  courseImage: string;
  faqInfos: Array<FaqInfo>;
}

export class FaqInfo {
  id: number;
  studentUsername: string;
  studentName: string;
  studentImage: string;
  teacherUsername: string;
  teacherName: string;
  teacherImage: string;
  question: string;
  questionDate: Date;
  answer: string;
  answerDate: Date;
}

export class PurchaseHistory {
  id: number;
  courseId: number;
  studentId: string;
  time: Date;
  cost: number;
}

export class PurchaseHistoryList {
  courseId: number;
  courseTitle: string;
  courseSubtitle: string;
  courseImage: string;
  purchaseHistoryInfos: PurchaseHistoryInfo[];
}
export class PurchaseHistoryInfo {
  id: number;
  studentUsername: string;
  studentName: string;
  studentImage: string;
  teacherUsername: string;
  teacherName: string;
  teacherImage: string;
  purchaseTime: Date;
  purchaseAmount: number;
}
// export class CourseLearning {
//   learnings: Array<string>;
// }

export class CourseRating {
  id: number;
  student: Student;
  value: number;
  time: Date;
}

export class PromoCode {
  start: Date;
  end: Date;
  name: string;
  off: number;
}

export class Property {
  id: number;
  icon: Files;
  text: string;
  position: number;

  constructor(text: string = "", iconName: string = "FaIcons") {
    this.text = text;
    this.icon = new Files("ICON", "PROPERTY").setContent(iconName);
  }
}

// export class Requirement {
//   requirements: Array<string>;
// }

export class Review {
  id: number;
  student: Student;
  date: Date;
  text: string;
  rating: CourseRating;
}

export class ReviewList {
  courseId: string;
  courseImage: string;
  courseTitle: string;
  courseSubtitle: string;
  reviewInfos: Array<ReviewInfo>;
}

export class ReviewInfo {
  id: number;
  studentUsername: string;
  studentName: string;
  studentImage: string;
  reviewTime: Date;
  ratingValue: number;
  review: string;
}

export class PublicResponse {
  enrolledStudentCount: number;
  ratingByNumber: Array<number>;
  ratingValue: number;
  ratingCount: number;
  reviews: Array<ReviewList>;
  faqs: Array<FaqList>;
}

export {};
