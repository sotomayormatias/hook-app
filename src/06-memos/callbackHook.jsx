import { useCallback, useState } from "react"
import { ShowIncrement } from "./showIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementOne = useCallback((plusSize) => {
    setCounter((value) => value + plusSize);
  }, []);

  return (
    <>
      <h1>CallbackHook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementOne} />
    </>
  )
}
