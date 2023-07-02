import { useMutation, useQueryClient } from 'react-query';
import { getStreamersQK } from '../../../utils/queryKeys';
import { axios } from '../../../utils/axios';
import { getErrorMessage } from '../../../utils/getErrorMessage';

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

	return {
		voteFor,
		error: getErrorMessage(error),
		isError,
		isSuccess,
	};
};
