import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {Quote} from "./types"
function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/quotes")
      .then((resp) => resp.json())
      .then((quotesFromServer) => setQuotes(quotesFromServer));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <ul className="list">
          {quotes.map((quote) => (
            <li className="list-item">
              <h1>{quote.name}</h1>
              <p>{quote.quote}</p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
