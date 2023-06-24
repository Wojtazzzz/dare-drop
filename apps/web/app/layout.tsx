import type { ReactNode } from 'react';
import { Navigation } from '../components/inc/nav/Nav';
import '../styles/global.css';
import { Providers } from '../components/Providers';

type RootLayoutProps = {
	children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className="bg-theme-base">
				<div className="mb-8">
					<Navigation />
				</div>

				<main>
					<Providers>{children}</Providers>
				</main>
			</body>
		</html>
	);
}
