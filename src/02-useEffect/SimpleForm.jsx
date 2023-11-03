import { useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: "defaultUser",
		email: "defaultemail@google.com"
	});

	const {username, email} = formState;

	const onInputChange = ({target}) => {
		const {value, name} = target;
		setFormState({
			...formState,
			[name]: value
		})
	}

	return (
		<>
			<h1>Formulario</h1>
			<hr />
			<input
				type="text"
				className="form-control"
				placeholder="Nombre de usuario"
				name="username"
				value={username}
				onChange={onInputChange}
			/>
			
			<input
				type="email"
				className="form-control mt-2"
				placeholder="Email"
				name="email"
				value={email}
				onChange={onInputChange}
			/>

			<Message />
		</>
	)
}
