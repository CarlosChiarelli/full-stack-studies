import React, { useState } from 'react';
import ExchangesList from '../../components/ExchangesList';
import styled from 'styled-components';

const PageNavigation = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 20px 0;
  
`;

const Input = styled.input`
	margin: 20px;
`;

const HomePage: React.FC = () => {
	const [pageIndex, setPageIndex] = useState(1);
	const [filter, setFilter] = useState('');

	const handlePreviousPage = () => {
		if (pageIndex > 1) setPageIndex(pageIndex - 1);
	};

	const handleNextPage = () => {
		setPageIndex(pageIndex + 1);
	};

	return (
		<div>
			<Input
				type="text"
				placeholder="Filtrar por nome..."
				value={filter}
				onChange={e => setFilter(e.target.value.toLowerCase())}
			/>
			<ExchangesList pageIndex={pageIndex} filter={filter} />
			<PageNavigation>
				<button onClick={handlePreviousPage} disabled={pageIndex === 1}>
					Página Anterior
				</button>
				<button onClick={handleNextPage}>Próxima Página</button>
			</PageNavigation>
		</div>
	);
};

export default HomePage;
