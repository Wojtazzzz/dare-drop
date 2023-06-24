import { useFormikContext } from 'formik';
import type { JoinUsFormValues, Platform } from '../../../utils/types';

export const useSelectPlatform = () => {
	const {
		setValues,
		values: { platform },
		handleBlur,
	} = useFormikContext<JoinUsFormValues>();

	const handleChangeValue = (platform: Platform) => {
		setValues((values) => ({
			...values,
			platform,
		}));
	};

	return {
		value: platform,
		handleChangeValue,
		handleBlur,
	};
};
