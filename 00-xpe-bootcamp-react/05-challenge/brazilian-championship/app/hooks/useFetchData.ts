import useSWR from 'swr';
import axios from 'axios';

const fetchData = (url: string) => axios.get(url).then(res => res.data);

export const useFetchData = (year: (number | '')) => {
	const { data, error } = useSWR(
		year ? `http://localhost:3001/${year}` : null,
		fetchData
	);
  
	const teamData =
		data && Array.isArray(data) && data.length > 0
			? data
					.at(-1)
					.partidas.flatMap((match: any) => [
						{ teamName: match.mandante, ...match.pontuacao_geral_mandante },
						{ teamName: match.visitante, ...match.pontuacao_geral_visitante },
					])
					.sort((a: any, b: any) => b.total_pontos - a.total_pontos)
					.map(
						({
							teamName,
							total_pontos: points,
							total_vitorias: victories,
							total_empates: draws, 
							total_derrotas: defeats,
							total_gols_marcados: scoredGoals,
							total_gols_sofridos: takenGoals,
						}: any) => ({
							teamName,
							points,
							victories,
							draws,
							defeats,
							scoredGoals,
							takenGoals,
							balance: scoredGoals - takenGoals,
						})
					)
			: []; 

	return {
		teamData,
		isLoading: !error && !data,
		isError: error,
	};
};
