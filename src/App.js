import "./styles.css";
import { useState } from "react";

const animalDictionary = {
  "🐒": "Monkey",
  "🐕": "Dog",
  "🦊": "Fox",
  "🐈": "Cat",
  "🐅": "Tiger",
  "🐎": "Horse",
  "🦌": "Deer",
  "🐄": "Cow"
};

const animalArray = Object.keys(animalDictionary);
var error = "oops! try with something else...";

export default function App() {
  const [meaning, setMeaning] = useState("");

  const inputHandler = (e) => {
    let emojiMeaning = animalDictionary[e.target.value];

    if (emojiMeaning) setMeaning(emojiMeaning);
    else {
      setMeaning(error);
    }
  };

  const clickHandler = (animal) => {
    let emojiMeaning = animalDictionary[animal];
    setMeaning(emojiMeaning);
  };

  return (
    <div className="App">
      <h1 id="app-header">Animal Pool</h1>
      <input
        className="input-text"
        onChange={inputHandler}
        type="text"
        placeholder="put or select an animal emoji to know the name"
      />
      <h2
        className="meaning-text"
        style={{ color: meaning === error ? "red" : "teal" }}
      >
        {" "}
        {meaning}
      </h2>
      <h3>
        {" "}
        {animalArray.map((animal) => (
          <span
            onClick={() => clickHandler(animal)}
            key={animal}
            style={{ padding: "0.5rem", cursor: "pointer" }}
          >
            {" "}
            {animal}
          </span>
        ))}
      </h3>
    </div>
  );
}
