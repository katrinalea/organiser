import axios from "axios";
import { useEffect, useState } from "react";
import { IDBNoteObj, INoteObj } from "../utils/interfaces";
import { url } from "../App";

export default function Notes(): JSX.Element {
  const [clicked, setClicked] = useState<boolean>(false);
  const [wholeNoteObj, setWholeNoteObj] = useState<INoteObj>({
    title: "",
    message: "",
  });
  const [allNotes, setAllNotes] = useState<IDBNoteObj[]>();

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get(`${url}/notes/items`);
      const fetchedWholeObject = response.data;
      const fetchedTasks = fetchedWholeObject.data;
      // sets tasks to the data
      setAllNotes(fetchedTasks);
    };
    fetchAPI();
  }, [allNotes]);

  const handleSubmit = async () => {
    console.log("entered submit");
    const response = await axios.post(`${url}/notes/items`, {
      title: wholeNoteObj.title,
      message: wholeNoteObj.message,
    });
    console.log(response, "submit made");
  };

  return (
    <div>
      <h1>Notes Page</h1>
      <button onClick={() => setClicked(!clicked)}> Add new note </button>

      {allNotes &&
        allNotes.map((note) => (
          <li key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.message}</p>
          </li>
        ))}
      {clicked && (
        <div>
          <p> Note title: </p>
          <input
            type="text"
            onChange={(e) =>
              setWholeNoteObj({ ...wholeNoteObj, title: e.target.value })
            }
          />
          <p> Note message: </p>
          <input
            type="text"
            onChange={(e) =>
              setWholeNoteObj({ ...wholeNoteObj, message: e.target.value })
            }
          />

          <div>
            <button type="submit" onClick={handleSubmit}>
              {" "}
              submit{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
