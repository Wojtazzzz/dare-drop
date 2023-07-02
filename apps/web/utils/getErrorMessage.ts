import * as Yup from 'yup';

const errorSchema = Yup.object({
	response: Yup.object({
		data: Yup.object({
			message: Yup.string(),
		}),
	}),
});

export const getErrorMessage = (error: unknown) => {
	if (errorSchema.isValidSync(error)) {
		return error.response.data.message;
	}

	return 'Something went wrong, please try again later';
};
