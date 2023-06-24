import type { ReactNode } from 'react';
import { Navigation } from '../components/inc/nav/Nav';
import '../styles/global.css';
import { Providers } from '../components/inc/Providers';
import { Footer } from '../components/inc/Footer';

type RootLayoutProps = {
	children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className="scroll-smooth bg-theme-base">
				<div className="mb-8">
					<Navigation />
				</div>

				<main>
					<Providers>{children}</Providers>
				</main>

				<Footer />
			</body>
		</html>
	);
}
