import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>{props.meaning.definitions[0].definition}</p>
      <p>
        Here is an example: <em>{props.meaning.definitions[0].example}</em>
      </p>
    </div>
  );
}
