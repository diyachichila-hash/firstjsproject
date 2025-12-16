"use client"

import { useState } from "react";

export default function Paragraph() {
    <p>
        idk leave me alone
    </p>
}

export function Counter({increment, startAt, title}) {
    const [currentNumber, setCurrentNumber] =  useState(startAt);
    function handleClick() {
        setCurrentNumber(currentNumber + increment);
    }

    return (
        <div className="text-center mt-5">
            <h2>React Counter {title}</h2>
            {increment > 2 ? (
                <p>The increment value is more than 2.</p>
            ): null}
            {startAt > 0 ? (
                <p>
                    The starting value is more than 0.
                </p>
            ): null}
            <p>You clicked {currentNumber} times!</p>
            <button onClick={handleClick}>
                Click me to change the count!
            </button>
        </div>
    )
}
