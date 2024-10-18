import React, { useState } from "react";

export default function SearchBar() {
    const [inputValue, setInputValue] = useState("");

    const handleInput = (e) => {
        setInputValue(e.target.value);
    };
    const handleOnclick = (e) => {
        setInputValue("");
    };

    return (
        <div>
            <div className="inputSearch">
                <input
                    type="text"
                    name="inputValue"
                    onChange={handleInput}
                    value={inputValue}
                />
                <button type="button" onClick={handleOnclick}>
                    Search
                </button>
            </div>
        </div>
    );
}
