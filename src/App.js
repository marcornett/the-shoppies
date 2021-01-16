import SearchBar from './Components/SearchBar/SearchBar'
import MovieResults from './Components/MovieResults/MovieResults'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <SearchBar />
      <MovieResults />
      <footer>
        <span>Marcel Cornett</span>
        <span> ∙ </span>
        <a 
        href="https://github.com/marcornett/the-shoppies"
        target="_blank" 
        rel="noopener noreferrer">
          The Shoppies
        </a>
        <span> ∙ </span>
        <a 
        href="https://github.com/marcornett"
        target="_blank" 
        rel="noopener noreferrer">
          Github
        </a>
        <span> ∙ </span>
        <a 
        href="https://www.linkedin.com/in/marcornett/"
        target="_blank" 
        rel="noopener noreferrer">
          LinkedIn
          </a>
        <span> ∙ </span>
        <a 
        href="https://www.canva.com/design/DAEQIioJLTc/PFuIWVKKVL-vu3Wm9Ad75Q/view?utm_content=DAEQIioJLTc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
        target="_blank" 
        rel="noopener noreferrer">
          Resume
        </a>
      </footer>
    </div>
  );
}

export default App;
