import { fireEvent, render, screen } from '@testing-library/react';
import CoinsList from '../pages/CoinsList';

const setFetchReturnData = data => {
	global.fetch = jest.fn(() =>
		Promise.resolve({
			json: () => Promise.resolve(data),
		})
	);
};

describe('General CoinsList test', () => {
	beforeAll(() => {
		setFetchReturnData([{ id: 'bitcoin' }, { id: 'ethereum' }]);
	});

	test('It should render', () => {
		render(<CoinsList />);
	});

	test('It should render API data', async () => {
		render(<CoinsList />);

		await screen.findByText('bitcoin');
	});

	test('It should filter correctly', async () => {
		render(<CoinsList />);

    await screen.findByText('bitcoin');
    await screen.findByText('ethereum');

		const filter = screen.getByLabelText(/filter/i);
		fireEvent.change(filter, { target: { value: 'bitcoin' } });

		screen.getByText('bitcoin');

    expect(screen.queryByText('ethereum')).not.toBeInTheDocument();
	});
});
