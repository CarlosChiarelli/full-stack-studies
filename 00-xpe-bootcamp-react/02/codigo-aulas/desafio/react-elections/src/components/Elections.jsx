import { useEffect, useState } from 'react';
import { getElection } from '../api/api';
import { ClipLoader } from 'react-spinners';
import { Election } from './Election';

export function Elections({ cities }) {
	const [selectedCity, setSelectedCity] = useState(cities[0].id);
	const [election, setElection] = useState(null);

	useEffect(() => {
		if (!selectedCity) {
			return;
		}

		setElection(null);
		getElection(selectedCity).then(backendElection => {
			setElection(backendElection);
		});
	}, [selectedCity]);

	console.log('🚀  election:', election);

	return (
		<div>
			<div className="grid place-items-center my-8">
				<select
					value={selectedCity}
					onChange={event => {
						setSelectedCity(event.currentTarget.value);
					}}
				>
					{cities.map(city => {
						return (
							<option key={city.id} value={city.id}>
								{city.name}
							</option>
						);
					})}
				</select>
			</div>

			{election ? (
				<Election data={election} />
			) : (
				<div className="grid place-items-center my-8">
					<ClipLoader />
				</div>
			)}
		</div>
	);
}
