'use client';

import { ThemeProvider } from '@material-tailwind/react';
import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

type ProvidersProps = {
	children: ReactNode;
};

const queryClient = new QueryClient();

export const Providers = ({ children }: ProvidersProps) => {
	return (
		<ThemeProvider>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</ThemeProvider>
	);
};
