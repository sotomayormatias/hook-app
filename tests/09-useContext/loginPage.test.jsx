import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from '../../src/09-useContext/LoginPage'
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Tests on <LoginPage />', ()=> {

  const user = {
    id: 1234,
    name: 'Matias',
    email: 'user@mail.com'
  };

  const setUserMock = jest.fn();

  test('should return component without user', ()=> {
    render(
      <UserContext.Provider value={{user: null}} >
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('should call setUser on button click', ()=> {
    render(
      <UserContext.Provider value={{user: null, setUser: setUserMock}} >
        <LoginPage />
      </UserContext.Provider>
    );

    const loginButton = screen.getByRole('button');
    fireEvent.click(loginButton);
    expect(setUserMock).toHaveBeenCalledWith(user);
  });
});