'use client';
import React from 'react';
import { useExchanges } from '../hooks/useExchanges';
import Image from 'next/image';

interface ExchangesListProps {
	pageIndex: number;
	filter: string;
}

const ExchangesList: React.FC<ExchangesListProps> = ({ pageIndex, filter }) => {
	const { exchanges, isLoading, isError } = useExchanges(pageIndex);

	if (isLoading) return <div>Loading...</div>;
	if (isError || !exchanges) return <div>Error loading exchanges.</div>;

	const filteredExchanges = exchanges.filter((exchange: any) =>
		exchange.name.toLowerCase().includes(filter)
	);

	return (
		<div className='m-1'>
			{filteredExchanges.length > 0 ? (
				filteredExchanges.map((exchange: any) => (
					<div key={exchange.id} className='p-4'>
						<Image
							src={exchange.image}
							alt={exchange.name}
							width="50"
							height="50"
						/>
						<h2>{exchange.name}</h2>
						<p>Year Established: {exchange.year_established}</p>
						<p>Country: {exchange.country}</p>
						<p>Trust Score: {exchange.trust_score}</p>
						<p>Trade Volume 24h BTC: {exchange.trade_volume_24h_btc}</p>
					</div>
				))
			) : (
				<div>Sem resultados</div>
			)}
		</div>
	);
};

export default ExchangesList;
