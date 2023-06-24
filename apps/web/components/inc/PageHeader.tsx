import type { ReactNode } from 'react';

type PageHeaderProps = {
	children: ReactNode;
};

export const PageHeader = ({ children }: PageHeaderProps) => {
	return (
		<div className="w-full text-center">
			<h2 className="text-4xl font-medium text-gray-100">{children}</h2>
		</div>
	);
};
