import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import { useParams } from "react-router-dom";

test('renders Homepage', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const homepageLabel = screen.getByText(/Disney Characters/i);
  expect(homepageLabel).toBeInTheDocument();
});

test('details Page on route change ', () => {
  const someRoute = '/profile/7/.GIFfany';


  // use <MemoryRouter> when you want to manually control the history

  let wrapper = render(<MemoryRouter initialEntries={[someRoute]}>
    <App />
  </MemoryRouter>);

  const detailComponent = wrapper.getByTestId("detail-component");
  expect(detailComponent).toBeInTheDocument()

});


test('testing wrong path -  Page Not Found', () => {
  const wrongRoute = '/some/route'

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[wrongRoute]}>
      <App />
    </MemoryRouter>
  )

  const backbtn = screen.getByTestId("pnf-backbtn");

  expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument()
  expect(backbtn).toBeInTheDocument()
})
