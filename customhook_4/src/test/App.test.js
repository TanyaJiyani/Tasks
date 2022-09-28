import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testing Custom Hook functionality', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <App />
    )
  });

  it('renders App ', () => {
    const appContainer = screen.getByText(/Custom Hook Example/i);
    expect(appContainer).toBeInTheDocument();
  });

  it('Label Should not display on first render', () => {

    const Count = wrapper.getByTestId('count');
    const Label = wrapper.getByTestId('label');
    const clickbtn = wrapper.getByTestId('check-btn');


    expect(Count).toBeInTheDocument()
    expect(Count).toHaveTextContent('Count : 0')
    expect(Label).toBeInTheDocument()
    expect(Label).toHaveTextContent('')
    expect(clickbtn).toHaveTextContent('Click to Display')

  })

  it('Label Should display on Count Change', () => {

    const Count = wrapper.getByTestId('count');
    const Label = wrapper.getByTestId('label');
    const clickbtn = wrapper.getByTestId('check-btn');

    userEvent.click(clickbtn)
    expect(clickbtn).toHaveTextContent('Click to add')
    expect(Count).toBeInTheDocument()
    expect(Count).toHaveTextContent('Count : 1')
    expect(Label).toBeInTheDocument()
    expect(Label).toHaveTextContent('You clicked 1 times')

  })

})
