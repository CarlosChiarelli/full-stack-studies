export function Election({ data }) {
	return (
		<div>
			<ul>
				<li>Eleitores: {data.city.votingPopulation.toFixed(2)}</li>
				<li>Eleitores: {data.city.absence.toFixed(2)}</li>
				<li>Eleitores: {data.city.presence.toFixed(2)}</li>
			</ul>

			<ul className="border p-8 m-2 flex flex-row items-center gap-2 flex-wrap" >
				{data.election.map((candidate, index) => {
					return (
						<li
							key={candidate.id}
							className="w-40 h-40 shadow-md m-4 p-2 flex flex-col items-center justify-center"
						>
							<img
								className="w-12 h-12 rounded-full"
								src={`/img/${candidate.username}.png`}
								alt=""
							/>
							<span>{candidate.name}</span>
							<span>{candidate.votes}</span>
							<span>{candidate.percent.toFixed(2)}</span>
							<span>{index === 0 ? 'Eleito' : 'Não eleito'}</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
