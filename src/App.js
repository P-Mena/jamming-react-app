//import logo from './logo.svg';
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResults";
import Playlist from "./components/Playlist";
import Tracklist from "./components/Tracklist";
import Track from "./components/Track";

function App() {
    return (
        <div className="App">
            <SearchBar />
            <SearchResult />
            <Playlist />
            <Tracklist />
            <Track />
        </div>
    );
}

export default App;
