import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";

describe('Tests on <MultipleCustomHooks />', () => {
  test('Should return default component', () => {
    render(<MultipleCustomHooks />);

    expect(screen.getByText('Loading...'));
    expect(screen.getByText('Breaking Bad Quotes'));

    const plusQuoteButton = screen.getByRole('button', {name: 'Plus Quote'});
    expect(plusQuoteButton.disabled).toBeTruthy();
  });
})