"use client";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

function Error({ error, reset }: ErrorProps) {
    return (
        <div>
            <h1>Error</h1>
            <p>{error.message}</p>
            <button type="button" className="bth bth-primary" onClick={reset}>Reset</button>
        </div>
    )
}

export default Error; 