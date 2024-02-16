const MONTHS = [
	'???',
	'jan',
	'fev',
	'mar',
	'abr',
	'mai',
	'jun',
	'jul',
	'ago',
	'set',
	'out',
	'nov',
	'dez',
];

export function getMonthDescription(monthNumber) {
	return MONTHS[monthNumber] ?? '???';
}

export function formatMoney(value) {
	return new Intl.NumberFormat('pt-BR', {
		currency: 'BRL',
		style: 'currency',
	}).format(value);
}

export function formatPercent(value) {
  return value.toFixed(2).replace('.', ',') + '%'
}