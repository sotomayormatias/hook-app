import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Tests on <MultipleCustomHooks />', () => {
  const mockPlusOne = jest.fn();
  const mockLessOne = jest.fn();
  const mockReset = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    plusOne: mockPlusOne,
    lessOne: mockLessOne,
    reset: mockReset
  });

  beforeEach(()=>{
    jest.clearAllMocks();
  })

  test('Should return default component', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: false
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Loading...'));
    expect(screen.getByText('Breaking Bad Quotes'));

    const plusQuoteButton = screen.getByRole('button', {name: 'Plus Quote'});
    expect(plusQuoteButton.disabled).toBeTruthy();
  });

  test('should return a quote', () => {
    useFetch.mockReturnValue({
      data: [{author: 'Tío Ben', quote: 'Un gran poder conlleva una gran responsabilidad'}],
      isLoading: false,
      hasError: false
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText('Un gran poder conlleva una gran responsabilidad'));
    expect(screen.getByText('Tío Ben'));

    const plusQuoteButton = screen.getByRole('button', {name: 'Plus Quote'});
    expect(plusQuoteButton.disabled).toBeFalsy();

  });

  test('should plus one quote on click plus Quote button', () => {
    useFetch.mockReturnValue({
      data: [{author: 'Tío Ben', quote: 'Un gran poder conlleva una gran responsabilidad'}],
      isLoading: false,
      hasError: false
    });
    
    render(<MultipleCustomHooks />);

    const plusQuoteButton = screen.getByRole('button', {name: 'Plus Quote'});
    fireEvent.click(plusQuoteButton);

    expect(mockPlusOne).toHaveBeenCalled();

  });
})