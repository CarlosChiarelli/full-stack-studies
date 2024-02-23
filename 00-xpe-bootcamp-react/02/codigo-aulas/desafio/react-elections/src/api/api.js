import axiosModel from 'axios';

const axios = axiosModel.create({ baseURL: 'http://localhost:3001' });

const CACHE = {};

async function delay() {
	const randomTimeout = Math.random() * 1000;
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, randomTimeout);
	});
}

export async function getCities() {
	await delay();
	const { data } = await axios.get('/cities');
	const sortedCities = data.toSorted((a, b) => a.name.localeCompare(b.name));
	return sortedCities;
}

export async function getCandidates() {
	await delay();
	const { data: candidates } = await axios.get('/candidates');
	return candidates;
}

export async function getElection(cityId) {
	if (CACHE[cityId]) {
		return CACHE[cityId];
	}

	await delay();
	const candidates = await getCandidates();
	const cities = await getCities();
	const selectedCity = cities.find(city => city.id === cityId);

	const { data: election } = await axios.get(`/election?cityId=${cityId}`);

	const sanitizedElection = election
		.toSorted((a, b) => b.votes - a.votes)
		.map(item => {
			// eslint-disable-next-line no-unused-vars
			const { cityId, candidateId, ...electionFieldsToKeep } = item;
			const currentCandidate = candidates.find(
				candidade => candidade.id === item.candidateId
			);

			const percent =
				(electionFieldsToKeep.votes / selectedCity.presence) * 100;

			return { ...electionFieldsToKeep, ...currentCandidate, percent };
		});

	const result = { city: selectedCity, election: sanitizedElection };

	CACHE[cityId] = result;
	console.log('🚀  CACHE:', CACHE);

	return result;
}
