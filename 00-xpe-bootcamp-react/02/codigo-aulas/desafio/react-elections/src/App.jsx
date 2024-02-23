import { Header } from './components/Header';
import { Main } from './components/Main';
import { getCities } from './api/api';
import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { Elections } from './components/Elections';

export default function App() {
	const [cities, setCities] = useState(null);
	const [showSpinner, setShowSpinner] = useState(true);

	useEffect(() => {
		getCities().then(backendCities => {
			setCities(backendCities);
		});
	}, []);
	console.log('🚀  cities:', cities);

	useEffect(() => {
		setTimeout(() => {
			setShowSpinner(false);
		}, 500);
	}, [setShowSpinner]);

	return (
		<>
			<Header>
				<h1>react-elections</h1>
			</Header>

			<Main>
				{!cities || showSpinner ? (
					<div className="grid place-items-center mt-8">
						<ClipLoader />
					</div>
				) : (
					<Elections cities={cities} />
				)}
			</Main>
		</>
	);
}
