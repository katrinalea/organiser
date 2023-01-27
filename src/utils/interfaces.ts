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

export interface IAddressEntry {
  first_name: string;
  second_name: string;
  street_name: string;
  house_number: string;
  postcode: string;
  town: string;
}

export interface IDBAddressEntry {
  id: number;
  first_name: string;
  second_name: string;
  street_name: string;
  house_number: string;
  postcode: string;
  town: string;
}

export interface INoteObj {
  title: string;
  message: string;
}
export interface IDBNoteObj {
  id: number;
  title: string;
  message: string;
}

export interface IQuote {
  quote: string;
  author: string;
}
