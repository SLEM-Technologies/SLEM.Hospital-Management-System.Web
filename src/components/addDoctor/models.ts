import { GenderEnum } from "@/data/constant";

export interface IBasicForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: GenderEnum;
  age: number;
  speciality: string;
  decription: string;
  dateOfBirth: Date;
}

export interface IAccountForm {
  username: string;
  password: string;
}

