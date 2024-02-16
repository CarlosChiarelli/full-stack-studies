import { sanitizedBackend } from './api/api';
import { Header } from './components/Header';
import { Main } from './components/Main';
import {
	formatMoney,
	formatPercent,
	getMonthDescription,
} from './helpers/helpers';

function Json({ children: json }) {
	return <pre>{JSON.stringify(json, null, 2)}</pre>;
}

function Investments({ children }) {
	return <div>{children}</div>;
}

function Investment({ children: investment }) {
	const investmentClassName =
		investment.balance > 0 ? 'text-green-600' : 'text-red-600';
	return (
		<div className="border p-4">
			<h2 className="text-center font-semibold text-xl">
				{investment.description}
			</h2>
			<h3 className="text-center font-semibold text-lg">
				Rendimento total:
				<span className={investmentClassName}>
					{' '}
					{formatMoney(investment.balance)} (
					{formatPercent(investment.totalPercentage)})
				</span>
			</h3>
			<ul>
				{investment.reports.map((report, index) => {
					const reportClassName =
						report.percentage === 0
							? 'text-black'
							: report.percentage > 0
							? 'text-green-600'
							: 'text-red-600';
					const lineColorClassName =
						index % 2 === 1 ? 'bg-gray-100' : 'bg-white';
					return (
						<li
							key={report.id}
							className={
								'flex flex-row items-center justify-between first-line: ' +
								lineColorClassName
							}
						>
							<span className="font-mono">
								{getMonthDescription(report.month)}/{report.year}
							</span>
							<span className={`flex-1 ml-4 ${reportClassName}`}>
								{formatMoney(report.value.toFixed(2))}
							</span>
							<span className={reportClassName}>
								{formatPercent(report.percentage)}
							</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default function App() {
	return (
		<>
			<Header>
				<h1>react-investments</h1>
			</Header>

			<Main>
				<Investments>
					{sanitizedBackend.map(investment => {
						return <Investment key={investment.id}>{investment}</Investment>;
					})}
				</Investments>
			</Main>
		</>
	);
}
