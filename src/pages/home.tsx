import { useEffect, useState } from "react";
import { DateTime } from "../components/date-time";
import { IQuote } from "../utils/interfaces";
import XMLParser from "react-xml-parser";

export default function Home(): JSX.Element {
  const [randomQuote, setRandomQuote] = useState<IQuote>();
  console.log("random quote", randomQuote);
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch("https://quotes.rest/qod?language=en", {
          mode: "no-cors",
        });
        const body: IQuote = await XMLParser(response);
        console.log(body, "json body");
        setRandomQuote(body);
      } catch (err) {
        console.log("fetch failed");
      }
    };
    fetchQuotes();
  }, []);

  return (
    <div>
      <h1> Organise your life ! </h1>
      {randomQuote && (
        <p>
          {" "}
          {randomQuote.quote} Author: {randomQuote.author}
        </p>
      )}
      <div className="dateTime">
        <DateTime />
      </div>
    </div>
  );
}
