import type { ReactNode } from 'react';

type ValidationErrorProps = {
	children: ReactNode;
};

export const ValidationError = ({ children }: ValidationErrorProps) => {
	return (
		<div className="ml-1 mt-0.5">
			<span className="text-sm font-medium tracking-wide text-red-400">
				{children}
			</span>
		</div>
	);
};
