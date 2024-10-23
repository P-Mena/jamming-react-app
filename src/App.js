//import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResult from "./components/SearchResults/SearchResults";
import Playlist from "./components/Playlist/Playlist";

function App() {
    const [favourite, setFavourite] = useState([]);

    const updateFavourite = (author, title, album, id) => {
        if (!favourite.find((f) => id === f.id)) {
            setFavourite((prev) => [...prev, { author, title, album, id }]);
        } else {
            alert("the song is already in your playlist");
        }
    };

    const deleteSong = (id) => {
        setFavourite((prev) => {
            return prev.filter((song) => song.id !== id);
        });
    };

    const sendList = () => {
        setFavourite([]);
    };

    return (
        <div className="App">
            <h1>Jammming</h1>
            <SearchBar />
            <SearchResult updateFavouritSongs={updateFavourite} />
            <Playlist
                favouriteSongs={favourite}
                deleteSong={deleteSong}
                sendList={sendList}
            />
        </div>
    );
}

export default App;
