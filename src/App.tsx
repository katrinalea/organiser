import AddressBook from "./pages/addressbook";
import NavBar from "./pages/NavBar";
import Notes from "./pages/notes";
import PhoneBook from "./pages/phonebook";
import ToDo from "./pages/todo";
import Home from "./pages/home";
import { useState } from "react";

function App(): JSX.Element {
  const [render, setRender] = useState<string>("home");
  const handleRender = (page: string) => {
    setRender(page);
  };

  return (
    <div>
      <NavBar setRender={handleRender} />
      <>
        {render === "home" && <Home />}
        {render === "address" && <AddressBook />}
        {render === "notes" && <Notes />}
        {render === "phone" && <PhoneBook />}
        {render === "to-do" && <ToDo />}
      </>
    </div>
  );
}

export default App;
