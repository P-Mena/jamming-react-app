//import logo from './logo.svg';
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResult from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";
import Tracklist from "./components/Tracklist/Tracklist";
import Track from "./components/Track/Track";

function App() {
    return (
        <div className="App">
            <h1>Jammming</h1>
            <SearchBar />
            <SearchResult />
            <Playlist />
            <Tracklist />
            <Track />
        </div>
    );
}

export default App;
