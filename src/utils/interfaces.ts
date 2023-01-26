export interface Iphonenumber {
  firstname: string;
  secondname: string;
  phonenumber: string;
}

export interface IDBphonenumber {
  id: number;
  first_name: string;
  second_name: string;
  phonenumber: string;
}

export interface ToDoInterface {
  id: number;
  message: string;
  date: Date;
  completed: boolean;
}
