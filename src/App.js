import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div>
        <h1>What are you looking for?</h1>
        <SearchEngine />
      </div>
      <footer>
        coded by Laura Isabeau - open sourced on{" "}
        <a href="https://github.com/lauraisabeau/dictonary-app" target="blank">
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a href="https://romantic-lamport-84df4e.netlify.app/" target="blank">
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
