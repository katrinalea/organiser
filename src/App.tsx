import AddressBook from "./pages/addressbook";
import NavBar from "./pages/NavBar";
import Notes from "./pages/notes";
import PhoneBook from "./pages/phonebook";
import ToDo from "./pages/todo";
import Home from "./pages/home";
import "./app.css";
import { Route, Routes } from "react-router-dom";

function App(): JSX.Element {
  return (
    <div>
      <NavBar />
      <br />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/addressbook" element={<AddressBook />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/phonebook" element={<PhoneBook />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="*" element={<p>NotFound!</p>} />
      </Routes>
    </div>
  );
}

export default App;
