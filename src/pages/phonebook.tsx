import axios from "axios";
import { useState, useEffect } from "react";
import { IDBphonenumber, Iphonenumber } from "../utils/interfaces";

export default function PhoneBook(): JSX.Element {
  const [personObj, setPersonObj] = useState<Iphonenumber>({
    firstname: "",
    secondname: "",
    phonenumber: "",
  });
  const [clicked, setClicked] = useState<boolean>(false);
  const [allPhonebookEntries, setAllPhonebookEntries] =
    useState<IDBphonenumber[]>();

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get("http://localhost:4000/phonebook/items");
      const fetchedWholeObject = response.data;
      const fetchedTasks = fetchedWholeObject.data;
      // sets tasks to the data
      setAllPhonebookEntries(fetchedTasks);
    };
    fetchAPI();
  }, [allPhonebookEntries]);

  const handleSubmit = async () => {
    console.log("entered submit");
    const response = await axios.post("http://localhost:4000/phonebook/items", {
      first_name: personObj.firstname,
      second_name: personObj.secondname,
      phonenumber: personObj.phonenumber,
    });
    console.log(response, "submit made");
  };

  return (
    <>
      <h1> Phone Book</h1>
      <div>
        <table>
          <tr>
            <th>First Name:</th>
            <th>Second Name:</th>
            <th>Phonenumber:</th>
          </tr>
          {allPhonebookEntries &&
            allPhonebookEntries.map((entry) => (
              <>
                <tr key={entry.id}>
                  <td>{entry.first_name}</td>
                  <td>{entry.second_name}</td>
                  <td>{entry.phonenumber}</td>
                </tr>
              </>
            ))}
        </table>
      </div>
      <button onClick={() => setClicked(!clicked)}> Add new entry </button>
      {clicked && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }} //prevents a page reload
        >
          <p> Enter details to add them to the PhoneBook</p>
          <p> First name:</p>
          <input
            id="name"
            type="text"
            placeholder="First Name"
            onChange={(e) =>
              setPersonObj({ ...personObj, firstname: e.target.value })
            }
          />
          <br></br>
          <p> Second name:</p>
          <input
            id="name"
            type="text"
            placeholder="Second Name"
            onChange={(e) =>
              setPersonObj({ ...personObj, secondname: e.target.value })
            }
          />
          <br />
          <p> Phone Number:</p>
          <input
            id="name"
            type="text"
            placeholder="Phone Number"
            onChange={(e) =>
              setPersonObj({ ...personObj, phonenumber: e.target.value })
            }
          />
          <br />
          <button type="submit" onClick={handleSubmit}>
            {" "}
            submit{" "}
          </button>
        </form>
      )}
    </>
  );
}
