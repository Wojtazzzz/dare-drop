import { Alert } from '@material-tailwind/react';

type SuccessAlertProps = {
	message: string;
};

export const SuccessAlert = ({ message }: SuccessAlertProps) => {
	return (
		<Alert color="green" variant="gradient">
			<span>{message}</span>
		</Alert>
	);
};
