import { useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { Small } from "./small";

export const Memorize = () => {

  const {counter, plusOne} = useCounter();
  const [show, setShow] = useState(true);

  return (
    <>
    <h1>Counter: <Small value={counter} /></h1>
    <hr />

    <button className="btn btn-primary"onClick={plusOne}>+1</button>
    <button className="btn btn-outline-primary"onClick={() => setShow(!show)}>
      show/hide {JSON.stringify(show)}
    </button>
    </>
  )
}
