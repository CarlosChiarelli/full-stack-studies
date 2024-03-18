// CASOS:

// getStaticProps (carregar a lista durante o build)
// getStaticPaths + getStaticPropos (no caso dos dados estar dentro de uma página dinâmica)
// getServerSidePropos (preciso que seja carregado a cada request)
// swr ou useEffect (a requisição precisa ser feita do lado do cliente)

// Na nova versão do Next (13) não uso nada disso, ele já apresenta um fetch (data fetch) embutido

import ListItem from './ListItem';

async function getData() {
	const res = await fetch('http://localhost:3001/todos', {
		cache: 'force-cache',
	});

	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}

	return res.json();
}

async function List() {
	const data = await getData();
	console.log('🚀  data:', data);

	return (
		<div>
			<ul>
				{data.map(todo => {
					return (
						<li key={todo.id}>
							<ListItem todo={todo} />
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default List;
