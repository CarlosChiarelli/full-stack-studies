import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useState, FC } from 'react';

// Define o tipo para as props que o YearDropdown espera
interface YearDropdownProps {
	onChange: (year: number | '') => void;
}

const YearDropdown: FC<YearDropdownProps> = ({ onChange }) => {
	const [year, setYear] = useState<string>('');
	const firstYear = 2003;
	const lastYear = 2015;

	// Tipagem correta para o evento de mudança do Select
	const handleChange = (event: SelectChangeEvent<string>) => {
		const selectedYear = event.target.value;
		setYear(selectedYear);
		onChange(+selectedYear);
	};

	return (
		<Select value={year} onChange={handleChange} displayEmpty className="mb-5">
			<MenuItem value="" disabled>
				Selecione um ano
			</MenuItem>
			{Array.from(
				{ length: lastYear - firstYear + 1 }, // Ajuste para incluir o lastYear na lista
				(_, i) => firstYear + i
			).map(year => (
				<MenuItem key={year} value={String(year)}>
					{year}
				</MenuItem>
			))}
		</Select>
	);
};

export default YearDropdown;
