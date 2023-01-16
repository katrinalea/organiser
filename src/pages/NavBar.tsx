interface Iprops {
  setRender: (page: string) => void;
}

export default function NavBar(props: Iprops): JSX.Element {
  return (
    <div>
      <button onClick={() => props.setRender("home")}> Home </button>
      <button onClick={() => props.setRender("address")}> Address book </button>
      <button onClick={() => props.setRender("phone")}> Phone book </button>
      <button onClick={() => props.setRender("to-do")}> To Do List </button>
      <button onClick={() => props.setRender("notes")}> Notes page </button>
    </div>
  );
}
