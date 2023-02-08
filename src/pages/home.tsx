import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../App";
import { DateTime } from "../components/date-time";
import { IQuote } from "../utils/interfaces";
import { generateRandomNumber } from "../utils/randomNumber";

export default function Home(): JSX.Element {
  const [allQuotes, setAllQuotes] = useState<IQuote[]>();
  const [randomQuote, setRandomQuote] = useState<IQuote | undefined>();

  console.log("random quote", randomQuote);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await axios.get(`${url}/quotes`);
      const fetchedWholeObject = response.data;
      const fetchedQuotes: IQuote[] = fetchedWholeObject.data;
      setAllQuotes(fetchedQuotes);
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    allQuotes &&
      setRandomQuote(allQuotes[generateRandomNumber(0, allQuotes.length - 1)]);
    const timer = setInterval(
      () =>
        allQuotes &&
        setRandomQuote(
          allQuotes[generateRandomNumber(0, allQuotes.length - 1)]
        ),
      30000
    );
    return function cleanup() {
      clearInterval(timer);
    };
  }, [allQuotes]);

  return (
    <div>
      <h1> Organise your life ! </h1>
      {randomQuote && (
        <p className="scroll-text">
          {" "}
          {randomQuote.quote} <br />
          Author: {randomQuote.author}
        </p>
      )}
      <div className="dateTime">
        <DateTime />
      </div>
    </div>
  );
}
