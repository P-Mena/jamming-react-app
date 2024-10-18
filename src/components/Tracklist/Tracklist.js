import React from "react";

export default function Tracklist() {
    return (
        <div>
            <div className="title-Playlist">
                <input type="text" placeholder="type title playlist" />
            </div>

            <div className="tracks added to teh playlist">
                <ul>
                    <li>
                        <button>Remove to the playlist</button>
                    </li>
                    <li>
                        <button>Remove to the playlist</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
