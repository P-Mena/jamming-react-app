import React from "react";
import Tracklist from "./Tracklist/Tracklist";
import Track from "./Track/Track";

export default function Playlist({ favouriteSongs, deleteSong, sendList }) {
    return (
        <div>
            <div className="title-Playlist">
                <input type="text" placeholder="type title playlist" />
            </div>

            <div>
                <Tracklist
                    favouriteSongs={favouriteSongs}
                    deleteSong={deleteSong}
                />
                <Track sendList={sendList} />
            </div>
        </div>
    );
}
