import Link from 'next/link';
import { NavItem } from './NavItem';
import links from './links.json';
import { MobileNav } from './mobileNav/MobileNav';
import { Container } from '../Container';

export const Navigation = () => {
	return (
		<nav className="bg-secondary-base shadow-md" aria-label="Main navigation">
			<Container size="lg">
				<div className="mx-auto py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
					<div className="relative flex items-center justify-between">
						<div className="flex items-center">
							<Link href="/" className="py-1 outline-offset-8">
								<h1 className="text-xl font-bold uppercase tracking-wide text-gray-100 md:text-2xl">
									<span className="text-gray-100">Dare</span>&nbsp;
									<span className="text-primary-base">Drop</span>
								</h1>
							</Link>
						</div>

						<ul
							role="list"
							className="ml-4 hidden items-center space-x-2 lg:flex"
						>
							{links.map(({ link, label }, key) => (
								<li key={key}>
									<NavItem link={link} label={label} />
								</li>
							))}
						</ul>

						<MobileNav />
					</div>
				</div>
			</Container>
		</nav>
	);
};
