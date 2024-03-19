'use client';
import useSWR from 'swr'; // works ✅

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useExchanges(pageIndex: number) {
	const { data, error } = useSWR(
		`https://api.coingecko.com/api/v3/exchanges?per_page=100&page=${pageIndex}`,
		fetcher
	);

	return {
		exchanges: data,
		isLoading: !error && !data,
		isError: error,
	};
}
