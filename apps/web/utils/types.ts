export type Platform = 'twitch' | 'youtube' | 'tiktok' | 'kick' | 'rumble';

export type JoinUsFormValues = {
	name: string;
	platform: Platform;
	description: string;
};
