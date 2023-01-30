import { Link } from "react-router-dom";
import { DateTime } from "../components/date-time";

export default function NavBar(): JSX.Element {
  return (
    <>
      <div className="navBar">
        <Link to="/"> Home </Link>
        <Link to="/addressbook"> AddressBook </Link>
        <Link to="/notes"> Notes </Link>
        <Link to="/phonebook"> PhoneBook </Link>
        <Link to="/todo"> To-Do</Link>
      </div>
      <div className="navbar-datetime">
        <DateTime />
      </div>
    </>
  );
}
