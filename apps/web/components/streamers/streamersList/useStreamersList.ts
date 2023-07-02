import { useQuery } from 'react-query';
import { axios } from '../../../utils/axios';
import { getStreamersQK } from '../../../utils/queryKeys';
import * as Yup from 'yup';

const streamersResponseSchema = Yup.array(
	Yup.object({
		id: Yup.number(),
		name: Yup.string(),
		description: Yup.string(),
		image: Yup.string().url().nullable(),
		votes: Yup.array(
			Yup.object({
				id: Yup.number(),
				ip: Yup.string(),
				streamerId: Yup.number(),
			})
		),
	})
);

const fetchStreamers = async () => {
	const response = await axios
		.get('/streamers')
		.then((response) => response.data);

	return streamersResponseSchema.validateSync(response);
};

export const useStreamersList = () => {
	return useQuery(getStreamersQK(), fetchStreamers);
};
