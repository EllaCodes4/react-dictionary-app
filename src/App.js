import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <Dictionary defaultKeyword="persist" />
      <footer className="mb-5">
        This app was coded by{" "}
        <a
          href="https://ellacodes.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Gabriella Corales ("EllaCodes")
        </a>{" "}
        and is open sourced on{" "}
        <a
          href="https://github.com/EllaCodes4/react-dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
