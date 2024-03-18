import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Título App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div style={{ backgroundColor: 'yellow' }}> Layout store{children}</div>;
}
