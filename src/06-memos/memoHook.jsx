import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter"

const HeavyStuff = (iterationNumber) => {
  for (let i = 0; i<iterationNumber; i++) {
    console.log('Me volvi a generar');
  }

  return `${iterationNumber} iteraciones realizadas`
}

export const MemoHook = () => {

  const {counter, plusOne} = useCounter(4000);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => HeavyStuff(counter), [counter]);

  return (
    <>
    <h1>Counter: <small>{counter}</small></h1>
    <hr />

    <h4>{memorizedValue}</h4>

    <button className="btn btn-primary"onClick={plusOne}>+1</button>
    <button className="btn btn-outline-primary"onClick={() => setShow(!show)}>
      show/hide {JSON.stringify(show)}
    </button>
    </>
  )
}
