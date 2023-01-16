import { useState } from "react";
import { isClassStaticBlockDeclaration } from "typescript";

interface Iperson {
  firstname: string;
  secondname: string;
  phonenumber: string;
}

export default function PhoneBook(): JSX.Element {
  const [personObj, setPersonObj] = useState<Iperson>({
    firstname: "",
    secondname: "",
    phonenumber: "",
  });

  const [clicked, setClicked] = useState<boolean>(false);
  const handleSubmit = () => {
    console.log("handle submit entered");
    //post request to db of person onj
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
