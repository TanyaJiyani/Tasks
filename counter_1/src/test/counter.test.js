import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../store';

const renderCounter = () => {
    return render(
        <Provider store={store} ><App /></Provider>
    );
};

describe('Testing App Counter functionality', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = renderCounter();
    });

    it('All Elements should be present', () => {
        const counterLabel = screen.getByText(/Counter/i)
        const incrementButton = wrapper.getByTestId('increment')
        const decrementButton = wrapper.getByTestId('decrement')
        const resetButton = wrapper.getByTestId('reset')
        const counterText = screen.getByTestId("counter-val")

        expect(incrementButton).toBeInTheDocument()
        expect(incrementButton).toBeEnabled()
        expect(decrementButton).toBeInTheDocument()
        expect(decrementButton).toBeDisabled()
        expect(resetButton).toBeInTheDocument()
        expect(resetButton).toBeDisabled()
        expect(counterLabel).toBeInTheDocument()
        expect(counterText).toHaveTextContent(0)
        expect(incrementButton).toBeInTheDocument()
        expect(incrementButton).toBeEnabled()
    })

    it('On Click of Increment value should be 1 and decrement and reset button enables', () => {
        const incrementButton = wrapper.getByTestId('increment')
        const decrementButton = wrapper.getByTestId('decrement')
        const resetButton = wrapper.getByTestId('reset')
        const counterText = screen.getByTestId("counter-val")

        expect(counterText).toHaveTextContent(0)
        userEvent.click(incrementButton)
        expect(counterText).toHaveTextContent(1)
        expect(decrementButton).not.toBeDisabled()
        expect(resetButton).not.toBeDisabled()
        userEvent.click(decrementButton)
    })

    it('On Click of Decrement value decreases by 1 and decrement and reset disabled', () => {
        const incrementButton = wrapper.getByTestId('increment')
        const decrementButton = wrapper.getByTestId('decrement')
        const resetButton = wrapper.getByTestId('reset')
        const counterText = screen.getByTestId("counter-val")

        expect(counterText).toHaveTextContent(0)
        userEvent.click(incrementButton)
        expect(counterText).toHaveTextContent(1)
        expect(decrementButton).not.toBeDisabled()
        userEvent.click(decrementButton)
        expect(counterText).toHaveTextContent(0)
        expect(decrementButton).toBeDisabled()
        expect(resetButton).toBeDisabled()
    })
})

describe("Testing redux store on dispatching actions", () => {
    it("intial counter in store must be 0", () => {
        const expected = { counter: 0 };
        expect(expected).toStrictEqual(store.getState());
    });
    it("dispatch type INCREMENT and verify the counter in store to be 1", () => {
        store.dispatch({ type: 'INCREMENT' });
        const expected = { counter: 1 };
        expect(expected).toStrictEqual(store.getState());
    });
    it("dispatch type DECREMENT and verify the counter in store to be 0", () => {
        store.dispatch({ type: 'DECREMENT' });
        const expected = { counter: 0 };
        expect(expected).toStrictEqual(store.getState());
    });
});
