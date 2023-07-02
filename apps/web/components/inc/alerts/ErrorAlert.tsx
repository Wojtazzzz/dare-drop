import { Alert } from '@material-tailwind/react';

type ErrorAlertProps = {
	message: string;
};

export const ErrorAlert = ({ message }: ErrorAlertProps) => {
	return (
		<Alert color="red" variant="gradient">
			<span>{message}</span>
		</Alert>
	);
};
