import type { ReactNode } from 'react';

type PageHeaderProps = {
	id?: string;
	children: ReactNode;
};

export const PageHeader = ({ id, children }: PageHeaderProps) => {
	return (
		<div className="w-full text-center">
			<div id={id} className="relative bottom-5"></div>
			<h2 className="text-4xl font-medium text-gray-100">{children}</h2>
		</div>
	);
};
