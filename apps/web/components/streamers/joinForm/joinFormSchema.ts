import * as Yup from 'yup';
import type { Platform } from '../../utils/types';

export const joinFormSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, 'Too Short!')
		.max(50, 'Too Long!')
		.required('Required'),
	platform: Yup.mixed<Platform>()
		.oneOf(['twitch', 'youtube', 'tiktok', 'rumble', 'kick'])
		.required('Required'),
	description: Yup.string()
		.min(2, 'Too Short!')
		.max(350, 'Too Long!')
		.required('Required'),
});
