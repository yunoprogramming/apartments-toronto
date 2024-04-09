/** @format */

import type { Metadata } from 'next';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Apartments Toronto',
	description: 'Helping people find their new home in the GTA',
	icons: [
		{
			url: 'images/logo.png',
			rel: 'icon',
			type: 'image/png',
			// You can specify additional properties like sizes if needed
		},
	],
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				{/* No need to add the favicon link here */}
			</Head>
			<body className={inter.className}>{children}</body>
		</>
	);
}

