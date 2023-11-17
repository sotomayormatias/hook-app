import { useCallback, useState } from "react"
import { ShowIncrement } from "./showIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementOne = useCallback(() => {
    setCounter((value) => value + 1);
  }, []);

  return (
    <>
      <h1>CallbackHook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementOne} />
    </>
  )
}
