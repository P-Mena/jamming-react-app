import React from "react";

export default function Track({ sendList }) {
    const handleOnClick = () => {
        sendList();
    };
    return (
        <div>
            <button onClick={handleOnClick}> Save to Spotify</button>
        </div>
    );
}
