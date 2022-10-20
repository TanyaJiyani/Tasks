import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'
import '../Styles/counter.css';

export default function Counter() {
    const [count, setCount] = useState(0)

    if (count === 6)
        throw new Error("Oops !! Counter Crashed")

    return (
        <div >
            <h3>Counter</h3>
            <div className='counter'>
                <p>Count : {count}</p>
                <Button variant="outline-primary" onClick={() => setCount((prev) => prev + 1)}>Increment</Button>
            </div>

            <br />
            <span>Note : Counter will throw error if count is 6..
                <br />
                If it crashes, the error boundary will replace it.
            </span>
        </div>
    )
}
