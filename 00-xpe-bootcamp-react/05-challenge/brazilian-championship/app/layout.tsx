import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Brasileirão',
	description: 'Dados do campeonato brasileiro',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body
				className={`${inter.className} flex justify-center items-center bg-gray-100`}
			>
				<div className="w-full max-w">
					<h1 className="text-2xl font-bold text-center my-8 bg-gray-200 p-3">
						Brasileirão
					</h1>
					{children}
				</div>
			</body>
		</html>
	);
}
