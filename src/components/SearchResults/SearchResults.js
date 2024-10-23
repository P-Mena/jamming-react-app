import React from "react";
import Row from "./Row";
const mockedData = [
    { name: "La rondine", author: "Mango", album: "Rondine", id: 0 },
    {
        name: "Piu' bella cosa",
        author: "Eros Ramazzotti",
        album: "Cose",
        id: 1,
    },
    { name: "Girasole", author: "Giorgia", album: "e poi", id: 2 },
    {
        name: "Rossetto e caffe'",
        author: "Sal Da Vinci",
        album: "Incontro",
        id: 3,
    },
    { name: "Vita spericolata", author: "Vasco Rossi", album: "Guai", id: 4 },
];

export default function SearchResult({ updateFavouritSongs }) {
    return (
        <div>
            <h3>Results:</h3>
            <div>
                {mockedData.map((item) => {
                    return (
                        <Row
                            key={`searchResult_${item.id}`}
                            title={item.name}
                            author={item.author}
                            album={item.album}
                            id={item.id}
                            updateFavouritSongs={updateFavouritSongs}
                        />
                    );
                })}
            </div>
        </div>
    );
}
