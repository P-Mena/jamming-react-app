import React from "react";

export default function Row({ title, author, album, id, updateFavouritSongs }) {
    const handleOnClick = () => {
        updateFavouritSongs(author, title, album, id);
    };

    return (
        <div>
            <h3>{title}</h3>
            <p>{author}</p>
            <p>{album}</p>
            <button onClick={handleOnClick}>Add</button>
        </div>
    );
}
