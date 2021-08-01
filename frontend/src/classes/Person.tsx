import { Country } from "./Country";
import { Files } from "./Files";
import { Language } from "./Language";

export class Person {
  accountType: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  dob?: Date | null;
  institution?: string;
  fbURL?: string;
  linkedInUrl?: string;
  signupDate?: Date;
  about?: string;
  country?: Country;
  photo?: Files;
  card?: CreditCard;
  youtubeURL?: string;
  website?: string;
  languages?: Array<Language>;
}

export class Admin extends Person {}

export class Student extends Person {
  eduStatus: EduStatus;

  constructor(email: string, password: string) {
    super();
    this.accountType = "Student";
    this.email = email;
    this.password = password;
  }
}

export class Teacher extends Person {
  designation: Designation;
  constructor(email: string, password: string) {
    super();
    this.accountType = "Teacher";
    this.email = email;
    this.password = password;
  }
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
