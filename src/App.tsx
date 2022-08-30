import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/quotes")
      .then((resp) => resp.json())
      .then((quotesFromServer) => setQuotes(quotesFromServer));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {quotes.map((quote) => (
            <li>
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
