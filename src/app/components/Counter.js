import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count +1);
    }

    return (
        <div className="text-center mt-5">
            <h2>
                react Counter
            </h2>
            <p> 
                you clicked {count} times!
            </p>
            <button onClick={handleClick}>
                click me to change the count
            </button>
        </div>
    )
}