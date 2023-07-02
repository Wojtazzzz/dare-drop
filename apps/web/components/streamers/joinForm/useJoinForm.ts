import type { JoinUsFormValues } from '../../../utils/types';
import { useMutation, useQueryClient } from 'react-query';
import { getStreamersQK } from '../../../utils/queryKeys';
import { axios } from '../../../utils/axios';
import { getErrorMessage } from '../../../utils/getErrorMessage';

export const useJoinForm = () => {
	const queryClient = useQueryClient();

	const { error, isError, isSuccess, mutate } = useMutation(
		async (payload: JoinUsFormValues) => {
			return await axios.post('/streamers', payload);
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(getStreamersQK());
			},
		}
	);

	const submit = async (values: JoinUsFormValues, resetForm: () => void) => {
		mutate(values, {
			onSuccess() {
				resetForm();
			},
		});
	};

	return {
		submit,
		error: getErrorMessage(error),
		isError,
		isSuccess,
	};
};
