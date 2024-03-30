'use client';
import { useState } from 'react';
import YearDropdown from './components/YearDropdown';
import { useFetchData } from './hooks/useFetchData';
import TeamsTable from './components/TeamsTable';

export default function Home() {
	const [selectedYear, setSelectedYear] = useState<number | ''>('');

	const { teamData, isLoading, isError } = useFetchData(selectedYear);

	return (
		<main className="flex flex-col items-center justify-center">
			<YearDropdown onChange={(year: number | '') => setSelectedYear(year)} />
			{isLoading && selectedYear && <p>Carregando...</p>}
			{isError && <p>Erro ao buscar os dados.</p>}
			{teamData && selectedYear && (
				<div className="text-center">
					<h2 className="text-lg font-bold mb-5">
						Campeonato brasileiro de: {selectedYear}
					</h2>
					{/* <pre className="text-xs">{JSON.stringify(teamData, null, 2)}</pre> */}
          <TeamsTable teams={teamData}/>
				</div>
			)}
		</main>
	);
}
