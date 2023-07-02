import type { ReactNode } from 'react';
import { Container } from '../../../components/inc/Container';
import { PageHeader } from '../../../components/inc/PageHeader';

type StreamerLayoutProps = {
	children: ReactNode;
};

export default function StreamerLayout({ children }: StreamerLayoutProps) {
	return (
		<Container size="md">
			<section>
				<div className="mb-8">
					<PageHeader>Streamer</PageHeader>
				</div>

				<article>{children}</article>
			</section>
		</Container>
	);
}
