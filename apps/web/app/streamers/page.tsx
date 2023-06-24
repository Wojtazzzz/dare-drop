import { JoinForm } from '../../components/streamers/joinForm/JoinForm';
import { Container } from '../../components/inc/Container';
import { PageHeader } from '../../components/inc/PageHeader';
import { StreamersList } from '../../components/streamers/streamersList/StreamersList';

export default function JoinUsPage() {
	return (
		<Container size="lg">
			<section>
				<div className="mb-7">
					<PageHeader id="join-us">Join us</PageHeader>
				</div>

				<JoinForm />
			</section>

			<section className="mt-20">
				<div className="mb-7">
					<PageHeader id="our-streamers">Our Streamers</PageHeader>
				</div>

				<StreamersList />
			</section>
		</Container>
	);
}
