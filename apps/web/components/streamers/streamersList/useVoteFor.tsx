import { useMutation, useQueryClient } from 'react-query';
import { getStreamersQK } from '../../../utils/queryKeys';
import { axios } from '../../../utils/axios';
import * as Yup from 'yup';

const errorSchema = Yup.object({
	response: Yup.object({
		data: Yup.object({
			message: Yup.string(),
		}),
	}),
});

export const useVoteFor = () => {
	const queryClient = useQueryClient();

	const { error, isError, isSuccess, mutate } = useMutation(
		async (streamerId: number) => {
			return await axios.post(`/streamers/${streamerId}/vote`);
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries(getStreamersQK());
			},
		}
	);

	const voteFor = (streamerId: number) => {
		mutate(streamerId);
	};

	let errorMessage = '';

	if (isError) {
		errorMessage = errorSchema.isValidSync(error)
			? error.response.data.message
			: 'Something went wrong, please try again later';
	}

	return {
		voteFor,
		errorMessage,
		isError,
		isSuccess,
	};
};
