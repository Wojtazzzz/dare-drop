import Link from 'next/link';

type NavItemProps = {
	link: string;
	label: string;
	onClick?: () => void;
};

export const NavItem = ({ link, label, onClick = null }: NavItemProps) => {
	return (
		<Link
			href={link}
			className="p-2 font-medium tracking-wide text-gray-100 transition-colors duration-[400ms] md:text-lg lg:hover:text-primary-base"
			onClick={onClick}
		>
			{label}
		</Link>
	);
};
