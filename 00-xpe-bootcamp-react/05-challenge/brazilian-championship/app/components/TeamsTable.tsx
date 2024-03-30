import React, { FC } from 'react';
import Image from 'next/image'; // Importação do componente Image
import normalizeString from '../util/normalizeString';

// Definindo a tipagem para os dados que o componente espera receber
interface TeamData {
	teamName: string;
	points: number;
	victories: number;
	draws: number;
	defeats: number;
	scoredGoals: number;
	takenGoals: number;
	balance: number;
}

interface TeamsTableProps {
	teams: TeamData[];
}

const TeamsTable: FC<TeamsTableProps> = ({ teams }) => {
	return (
		<table className="min-w-full table-auto text-sm text-left text-gray-500">
			<thead className="text-xs text-gray-700 uppercase bg-gray-50">
				<tr>
					<th scope="col" className="py-3 px-6"></th>
					<th scope="col" className="py-3 px-6"></th>
					<th scope="col" className="py-3 px-6">
						P
					</th>
					<th scope="col" className="py-3 px-6">
						V
					</th>
					<th scope="col" className="py-3 px-6">
						E
					</th>
					<th scope="col" className="py-3 px-6">
						D
					</th>
					<th scope="col" className="py-3 px-6">
						GP
					</th>
					<th scope="col" className="py-3 px-6">
						GC
					</th>
					<th scope="col" className="py-3 px-6">
						S
					</th>
				</tr>
			</thead>
			<tbody>
				{teams.map((team, index) => (
					<tr
						key={index}
						className={`border-b ${
							index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
						}`}
					>
						<td className="py-4 px-6 text-center">
							{(index + 1).toString().padStart(2, '0')}
						</td>
						<td className="py-4 px-6 flex items-center">
							<span className="relative h-6 w-6 mr-2">
								<Image
									src={`/img/${normalizeString(team.teamName)}.png`}
									alt={team.teamName}
									layout="fill"
									objectFit="contain"
								/>
							</span>
							{team.teamName}
						</td>
						<td className="py-4 px-6">{team.points}</td>
						<td className="py-4 px-6">{team.victories}</td>
						<td className="py-4 px-6">{team.draws}</td>
						<td className="py-4 px-6">{team.defeats}</td>
						<td className="py-4 px-6">{team.scoredGoals}</td>
						<td className="py-4 px-6">{team.takenGoals}</td>
						<td className="py-4 px-6">{team.balance}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default TeamsTable;
