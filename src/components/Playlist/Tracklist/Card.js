import React from "react";

export default function Card({ author, title, album, id, deleteSong }) {
    const handleClick = () => {
        deleteSong(id);
    };

    return (
        <div>
            <h2>{title}</h2>
            <p>{author}</p>
            <p>{album}</p>
            <button onClick={handleClick}>Remove</button>
        </div>
    );
}
