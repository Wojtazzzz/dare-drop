import { Alert } from '@material-tailwind/react';

type InfoAlertProps = {
	message: string;
};

export const InfoAlert = ({ message }: InfoAlertProps) => {
	return (
		<Alert color="purple" variant="gradient">
			<span>{message}</span>
		</Alert>
	);
};
