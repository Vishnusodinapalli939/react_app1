import React, { useState, useMemo } from 'react';

const MemoHook = () => {
    const [count, setCount] = useState(0);
    const [renderCount, setRenderCount] = useState(0);

    const computeExpensiveValue = (num) => {
        console.log("Computing...");
        let result = 0;
        for (let i = 0; i < 1000; i++) {
            result += num;
        }
        return result;
    };

    // Using useMemo to memoize the result based on count
    const result = useMemo(() => computeExpensiveValue(count), [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <p>Result: {result}</p>
            <p>Render Count: {renderCount}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setRenderCount(renderCount + 1)}>
                Increment Render Count
            </button>
        </div>
    );
};

export default MemoHook;