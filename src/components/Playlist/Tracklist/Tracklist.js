import React from "react";
import Card from "./Card";

export default function Tracklist({ favouriteSongs, deleteSong }) {
    return (
        <div>
            <div className="tracks added to the playlist">
                {favouriteSongs.map((song) => {
                    return (
                        <Card
                            key={`tracklist_${song.id}`}
                            author={song.author}
                            title={song.title}
                            album={song.album}
                            id={song.id}
                            deleteSong={deleteSong}
                        />
                    );
                })}
            </div>
        </div>
    );
}
