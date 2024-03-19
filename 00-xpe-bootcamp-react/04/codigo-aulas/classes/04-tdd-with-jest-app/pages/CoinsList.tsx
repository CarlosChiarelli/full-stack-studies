import React, { useEffect, useState } from 'react';

function CoinsList() {
	const [data, setData] = useState([]);
	const [filterText, setFilterText] = useState('');
	const [filteredData, setFilteredData] = useState([]);

	useEffect(() => {
		fetch(
			'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en'
		)
			.then(resp => resp.json())
			.then(setData);
	}, []);

	useEffect(() => {
		if (data) {
			setFilteredData(
				data.filter((item: any) =>
					item.id.toLowerCase().includes(filterText.toLowerCase())
				)
			);
		} else {
			setFilteredData([]);
		}
	}, [data, filterText]);

	return (
		<div>
			<div>
				<label>
					Filter
					<input onChange={(event: any) => setFilterText(event.target.value)} />
				</label>
			</div>
			{filteredData.map((item: any) => (
				<div>{item.id}</div>
			))}
		</div>
	);
}

export default CoinsList;
