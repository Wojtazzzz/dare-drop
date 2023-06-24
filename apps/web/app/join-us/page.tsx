import { JoinForm } from '../../components/JoinForm/JoinForm';
import { Container } from '../../components/inc/Container';
import { PageHeader } from '../../components/inc/PageHeader';

export default function JoinUsPage() {
	return (
		<Container size="lg">
			<div className="mb-5">
				<PageHeader>Join us</PageHeader>
			</div>

			<JoinForm />
		</Container>
	);
}
