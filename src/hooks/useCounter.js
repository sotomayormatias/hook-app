import { useState } from "react"

export const useCounter = (initValue = 0) => {
    const [counter, setCounter] = useState(initValue);

    const plusOne = () => {
        return setCounter(current => current + 1);
    }
    const lessOne = () => {
        return setCounter(current => current - 1);
    }
    const reset = () => {
        return setCounter(initValue);
    }

    return {
        counter,
        plusOne,
        lessOne,
        reset,
    }
}