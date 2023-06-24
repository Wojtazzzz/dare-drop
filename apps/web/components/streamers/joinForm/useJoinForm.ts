import type { JoinUsFormValues } from '../../utils/types';

export const useJoinForm = () => {
	const submit = async (values: JoinUsFormValues) => {
		console.log(values);
		return;
	};

	return {
		submit,
	};
};
