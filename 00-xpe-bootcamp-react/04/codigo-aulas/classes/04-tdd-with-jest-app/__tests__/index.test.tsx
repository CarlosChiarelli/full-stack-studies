/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Home from '@/pages/home/index';

const sum = (a: number, b: number) => {
	return a + b;
};

const captalize = (text: string) => {
	return text.length > 0 ? 'Rodrigo' : '';
};

describe('Simple operations', () => {
	test('should return 4 to 2 + 2', () => {
		expect(sum(2, 2)).toBe(4);
	});
	test('should do a times operation', () => {});
});

describe('Sanity of formater', () => {
	test('Should do nothing for empty entry', () => {
		expect(captalize('')).toBe('');
	});

	test('Should return Rodrigo to rodrigo', () => {
		expect(captalize('rodrigo')).toBe('Rodrigo');
	});
});

// describe("Home", () => {
//   it("renders a heading", () => {
//     render(<Home />);

//     const heading = screen.getByRole("heading", {
//       name: /welcome to next\.js!/i,
//     });

//     expect(heading).toBeInTheDocument();
//   });
// });
