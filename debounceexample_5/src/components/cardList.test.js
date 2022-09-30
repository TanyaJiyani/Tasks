import { render, screen } from '@testing-library/react';
import CardList from './CardList';

const cardData = [{ _id: 1, name: "Oslo" }, { _id: 2, name: "Denver" }];
const loading = false;

test('renders card list without Fail', () => {
    render(<CardList cardData={cardData} loading={loading} />);
    const CardsElement = screen.getByTestId('card-list')
    expect(CardsElement).toBeInTheDocument();
});

test('render element with two cards & loading false ', () => {
    render(<CardList cardData={cardData} loading={loading} />);
    const items = screen.getAllByTestId("list-item");
    expect(items.length).toBe(2)
});

test('render element with no data ', () => {
    render(<CardList cardData={[]} loading={loading} />);
    const items = screen.queryAllByTestId("list-item");
    expect(items.length).toBe(0)
});

test('render element with loading true ', () => {
    render(<CardList cardData={[]} loading={true} />);
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument()
});



