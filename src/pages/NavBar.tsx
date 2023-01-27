import { DateTime } from "../components/date-time";

interface Iprops {
  setRender: (page: string) => void;
}

export default function NavBar(props: Iprops): JSX.Element {
  return (
    <div>
      <div className="navBar">
        <button onClick={() => props.setRender("home")}> Home </button>
        <button onClick={() => props.setRender("address")}>
          {" "}
          Address book{" "}
        </button>
        <button onClick={() => props.setRender("phone")}> Phone book </button>
        <button onClick={() => props.setRender("to-do")}> To Do List </button>
        <button onClick={() => props.setRender("notes")}> Notes page </button>
      </div>
      <div className="navbar-datetime">
        <DateTime />
      </div>
    </div>
  );
}
