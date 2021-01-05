import SearchBar from './Components/SearchBar/SearchBar'
import MovieResults from './Components/MovieResults/MovieResults'
import Nominations from './Components/Nominations/Nominations'
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <MovieResults />
      <Nominations />
    </div>
  );
}

export default App;
