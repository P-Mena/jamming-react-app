import React from "react";

export default function Track({ resetFavourite, getFavouriteIds }) {
    const handleOnClick = () => {
        const listIds = getFavouriteIds();
        console.log(listIds);
        resetFavourite();
    };

    return (
        <div>
            <button onClick={handleOnClick}> Save to Spotify</button>
        </div>
    );
}
