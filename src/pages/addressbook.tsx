import axios from "axios";
import { useState, useEffect } from "react";
import { IAddressEntry, IDBAddressEntry } from "../utils/interfaces";

export default function AddressBook(): JSX.Element {
  const [addressObj, setAddressObj] = useState<IAddressEntry>({
    first_name: "",
    second_name: "",
    street_name: "",
    house_number: "",
    postcode: "",
    town: "",
  });
  const [clicked, setClicked] = useState<boolean>(false);
  const [allAddressBookEntries, setAllAddressBookEntries] =
    useState<IDBAddressEntry[]>();

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get(
        "http://localhost:4000/addressbook/entries"
      );
      const fetchedWholeObject = response.data;
      const fetchedTasks = fetchedWholeObject.data;
      // sets tasks to the data
      setAllAddressBookEntries(fetchedTasks);
    };
    fetchAPI();
  }, [allAddressBookEntries]);

  const handleSubmit = async () => {
    console.log("entered submit");
    const response = await axios.post(
      "http://localhost:4000/addressbook/entries",
      {
        first_name: addressObj.first_name,
        second_name: addressObj.second_name,
        street_name: addressObj.street_name,
        house_number: addressObj.house_number,
        postcode: addressObj.postcode,
        town: addressObj.town,
      }
    );
    console.log(response, "submit made");
  };

  return (
    <>
      <button onClick={() => setClicked(!clicked)}> Add new entry </button>
      {clicked && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }} //prevents a page reload
        >
          <p> Enter details to add them to the Address book</p>
          <p> First name:</p>
          <input
            id="name"
            type="text"
            placeholder="First Name"
            onChange={(e) =>
              setAddressObj({ ...addressObj, first_name: e.target.value })
            }
          />
          <br></br>
          <p> Second name:</p>
          <input
            id="name"
            type="text"
            placeholder="Second Name"
            onChange={(e) =>
              setAddressObj({ ...addressObj, second_name: e.target.value })
            }
          />
          <p> Street name:</p>
          <input
            type="text"
            placeholder="Street Name"
            onChange={(e) =>
              setAddressObj({ ...addressObj, street_name: e.target.value })
            }
          />
          <br />
          <p> House number:</p>
          <input
            type="text"
            placeholder="House number"
            onChange={(e) =>
              setAddressObj({ ...addressObj, house_number: e.target.value })
            }
          />
          <br />
          <p> Postcode:</p>
          <input
            type="text"
            placeholder="Postcode"
            onChange={(e) =>
              setAddressObj({ ...addressObj, postcode: e.target.value })
            }
          />
          <br />
          <p> Town:</p>
          <input
            type="text"
            placeholder="Town"
            onChange={(e) =>
              setAddressObj({ ...addressObj, town: e.target.value })
            }
          />
          <br />
          <button type="submit" onClick={handleSubmit}>
            {" "}
            submit{" "}
          </button>
        </form>
      )}
      <div>
        <table>
          <tr>
            <th>First Name:</th>
            <th>Second Name:</th>
            <th>Address:</th>
            <th>Postcode:</th>
            <th>Town:</th>
          </tr>
          {allAddressBookEntries &&
            allAddressBookEntries.map((entry) => (
              <>
                <tr key={entry.id}>
                  <td>{entry.first_name}</td>
                  <td>{entry.second_name}</td>
                  <td>
                    {entry.street_name}, {entry.house_number}
                  </td>
                  <td>{entry.postcode}</td>
                  <td>{entry.town}</td>
                </tr>
              </>
            ))}
        </table>
      </div>
    </>
  );
}
