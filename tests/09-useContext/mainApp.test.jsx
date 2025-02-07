import { render, screen } from "@testing-library/react"
import { Mainapp } from "../../src/09-useContext/Mainapp"
import { MemoryRouter } from "react-router-dom";

describe('Test on <MainApp />', () => {
  test('Should show HomePage', () => {
    render(
      <MemoryRouter>
        <Mainapp />
      </MemoryRouter>
    );

    expect(screen.getByText('HomePage')).toBeTruthy();
  });

  test('Should show LoginPage', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <Mainapp />
      </MemoryRouter>
    );

    expect(screen.getByText('LoginPage')).toBeTruthy();
  });

  test('Should show AboutPage', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Mainapp />
      </MemoryRouter>
    );

    expect(screen.getByText('AboutPage')).toBeTruthy();
  });
})