'use client';

import { ThemeProvider } from '@material-tailwind/react';
import type { ReactNode } from 'react';

type ProvidersProps = {
	children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
	return <ThemeProvider>{children}</ThemeProvider>;
};
