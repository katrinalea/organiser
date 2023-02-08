import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../App";
import { DateTime } from "../components/date-time";
import { IQuote } from "../utils/interfaces";

export default function Home(): JSX.Element {
  const [randomQuote, setRandomQuote] = useState<IQuote[]>();
  console.log("random quote", randomQuote);
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get(`${url}/quotes`);
      const fetchedWholeObject = response.data;
      const fetchedQuotes = fetchedWholeObject.data;
      setRandomQuote(fetchedQuotes);
    };
    fetchAPI();
  }, [randomQuote]);

  return (
    <div>
      <h1> Organise your life ! </h1>
      {randomQuote && (
        <p>
          {" "}
          {randomQuote[0].quote} Author: {randomQuote[0].author}
        </p>
      )}
      <div className="dateTime">
        <DateTime />
      </div>
    </div>
  );
}
