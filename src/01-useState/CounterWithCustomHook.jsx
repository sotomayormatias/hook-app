import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
    const {counter, plusOne, lessOne, reset} = useCounter();

    return <>
        <h1>Counter with Hook: {counter}</h1>

        <button className="btn btn-primary" onClick={plusOne} >+1</button>
        <button className="btn btn-primary" onClick={reset} >reset</button>
        <button className="btn btn-primary" onClick={lessOne} >-1</button>
    </>
}