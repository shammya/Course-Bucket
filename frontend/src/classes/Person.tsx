import { Country } from "./Country";
import { Files } from "./Files";
import { Language } from "./Language";

export class Person {
  accountType: string;
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  dob?: Date | null;
  institution?: string;
  fbURL?: string;
  linkedInURL?: string;
  signupDate?: Date;
  about?: string;
  country?: Country;
  photo?: Files;
  card?: CreditCard;
  youtubeURL?: string;
  website?: string;
  languages?: Array<Language>;

  constructor(email: string, username: string, password: string) {
    this.email = email;
    this.username = username;
    this.password = password;
  }

  setUsername(username) {
    this.username = username;
  }
}

export class Admin extends Person {}

export class Student extends Person {
  eduStatus: EduStatus;

  constructor(email: string, username: string, password: string) {
    super(email, username, password);
    this.accountType = "Student";
  }
}

export class Teacher extends Person {
  designation: Designation;
  constructor(email: string, username: string, password: string) {
    super(email, username, password);
    this.accountType = "Teacher";
  }
}

export class TeacherMiniInfo {
  username: string;
  about: string;
  photoContent: string;
  teacherName: string;
  rating: number;
  ratingCount: number;
  reviewCount: number;
  studentCount: number;
  courseCount: number;
}
export class CreditCard {
  id?: number;
  cardNo?: string;
  nameOnCard?: string;
  expireDate?: Date | null;
}

export class Designation {
  id: number;
  type: string;
  adminId: string;
}

export class EduStatus {
  id: number;
  type: string;
  adminId: string;
}

export {};
