import invariant from 'invariant';

invariant(
	process.env.NEXT_PUBLIC_APP_URL,
	'Missing APP_URL environment variable'
);
invariant(
	process.env.NEXT_PUBLIC_API_URL,
	'Missing API_URL environment variable'
);
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
