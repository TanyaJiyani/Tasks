import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';
import userEvent from '@testing-library/user-event';


test('renders App without Fail', () => {
  render(<App />);
  const linkElement = screen.getByText(/Debounce Example/i);
  expect(linkElement).toBeInTheDocument();
});
// 
const hardCodedString1 = "Showing Results for ";
const hardCodedString2 = " ......";

describe('test debounce Functionality', function () {
  afterEach(() => {
    jest.useRealTimers();
  });

  it('should debounce and only change value when delay time has passed', function () {
    jest.useFakeTimers();
    const { getByTestId } = render(<App />);
    const textInput = getByTestId('text-input');
    const debouncedValue = getByTestId('debounced-text');

    const changeAndPassTime = (input, passedTime) => {
      act(() => {
        jest.advanceTimersByTime(passedTime);
        userEvent.type(textInput, input);
      });
    };

    changeAndPassTime("1", 100);

    expect(debouncedValue.textContent).toBe('');
    expect(textInput.value).toBe('1');

    changeAndPassTime("2", 500);

    expect(debouncedValue.textContent).toBe(hardCodedString1 + '1' + hardCodedString2);
    expect(textInput.value).toBe('12');

    changeAndPassTime("3", 999);

    expect(debouncedValue.textContent).toBe(hardCodedString1 + '12' + hardCodedString2);
    expect(textInput.value).toBe('123');

    changeAndPassTime("4", 999);

    expect(debouncedValue.textContent).toBe(hardCodedString1 + '123' + hardCodedString2);
    expect(textInput.value).toBe('1234');
  });
});
