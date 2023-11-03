import { useRef } from "react"

export const FocusScreen = () => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }

  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input
            type="text"
            placeholder="ingrese su nombre"
            className="form-control"
        />
        <input
            type="text"
            placeholder="ingrese su nombre"
            className="form-control"
            ref={inputRef}
        />
        <input
            type="text"
            placeholder="ingrese su nombre"
            className="form-control"
        />

        <button
            className="btn btn-primary mt-2"
            onClick={handleClick}
        >
            Set focus
        </button>
    </>
  )
}
