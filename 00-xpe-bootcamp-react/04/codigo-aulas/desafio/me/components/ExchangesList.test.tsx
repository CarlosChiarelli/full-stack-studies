import { render, screen } from '@testing-library/react';
import ExchangesList from './ExchangesList';

describe('ExchangesList Component', () => {
	it('renders without crashing', () => {
		render(<ExchangesList pageIndex={1} />);
		expect(screen.getByText('Loading...')).toBeInTheDocument();
	});
});
