import { Select, Option } from '@material-tailwind/react';
import { useSelectPlatform } from './useSelectPlatform';

export const SelectPlatform = () => {
	const { value, handleChangeValue, handleBlur } = useSelectPlatform();

	return (
		<Select
			label="Select platform"
			color="deep-purple"
			labelProps={{
				className: 'peer-focus:!text-gray-100 !text-gray-400',
			}}
			aria-label="Select platform"
			className="text-gray-100"
			name="platform"
			onChange={handleChangeValue}
			onBlur={handleBlur}
			value={value}
		>
			<Option value="twitch">Twitch</Option>
			<Option value="youtube">YouTube</Option>
			<Option value="tiktot">TikTok</Option>
			<Option value="kick">Kick</Option>
			<Option value="rumble">Rumble</Option>
		</Select>
	);
};
