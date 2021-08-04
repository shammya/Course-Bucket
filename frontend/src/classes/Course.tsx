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
  publishDate: Date;
  lastUpdate: Date;
  isApproved: Boolean;
  teacher: Teacher;
  categories: Array<Category>;
  languages: Array<Language>;
  properties: Array<Property>;
  rating: number;
  reviews: Array<Review>;
  numOfStudents: number;
  prerequisite: Array<string>;
  outcomes: Array<string>;
  weeks: Array<Week>;
  level: string;
  promo: PromoCode;
}

export class Lecture {
  id: number;
  lectureNo: number;
  title: string;
  lastUpdate: Date;
  file: Files;
  isPreview: Boolean;

  constructor(title: string = "Lecture Title") {
    this.isPreview = false;
    this.title = title;
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
    this.lectures = [new Lecture()];
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

export class PurchaseHistory {
  id: number;
  courseId: number;
  studentId: string;
  time: Date;
  cost: number;
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
    this.icon = new Files("ICON", "PROPERTY", iconName);
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

export {};