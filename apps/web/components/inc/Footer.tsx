import Link from 'next/link';

const year = new Date().getFullYear();

export const Footer = () => {
	return (
		<footer className="relative mt-36 bg-primary-base">
			<svg
				className="absolute top-0 -mt-5 h-6 w-full text-primary-base sm:-mt-10 sm:h-16"
				preserveAspectRatio="none"
				viewBox="0 0 1440 54"
			>
				<path
					fill="currentColor"
					d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
				/>
			</svg>

			<div className="mx-auto px-4 pt-12 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
				<div className="row-gap-10 mb-8 grid gap-16 lg:grid-cols-6">
					<div className="md:max-w-md lg:col-span-2">
						<Link
							href="/"
							title="Dare Drop"
							className="inline-flex items-center"
						>
							<span className="text-xl font-bold uppercase tracking-wide text-gray-100">
								Dare Drop
							</span>
						</Link>

						<div className="mt-4 lg:max-w-sm">
							<p className="text-sm text-gray-100">
								This application was created for recruitment process purposes in
								Dare Drop company.
							</p>
							<p className="mt-4 text-sm text-gray-100">
								FullStask JavaScript Developer.
							</p>
						</div>
					</div>

					<div className="row-gap-8 grid grid-cols-2 gap-5 md:grid-cols-4 lg:col-span-4">
						<div></div>
						<div>
							<p className="font-semibold tracking-wide text-gray-100">
								Frontend
							</p>

							<ul role="list" className="mt-2 space-y-2">
								<li>
									<Link
										target="_blank"
										rel="noopener noreferrer"
										href="https://nextjs.org/"
										className="text-gray-100 transition-colors duration-300 hover:underline"
									>
										Next.js
									</Link>
								</li>
								<li>
									<Link
										target="_blank"
										rel="noopener noreferrer"
										href="https://tailwindcss.com/"
										className="text-gray-100 transition-colors duration-300 hover:underline"
									>
										Tailwind
									</Link>
								</li>
								<li>
									<Link
										target="_blank"
										rel="noopener noreferrer"
										href="https://tanstack.com/query/v3/"
										className="text-gray-100 transition-colors duration-300 hover:underline"
									>
										Tanstack Query
									</Link>
								</li>
								<li>
									<Link
										target="_blank"
										rel="noopener noreferrer"
										href="https://github.com/jquense/yup"
										className="text-gray-100 transition-colors duration-300 hover:underline"
									>
										Yup
									</Link>
								</li>
								<li>
									<Link
										target="_blank"
										rel="noopener noreferrer"
										href="https://formik.org/"
										className="text-gray-100 transition-colors duration-300 hover:underline"
									>
										Formik
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<p className="font-semibold tracking-wide text-gray-100">
								Backend
							</p>
							<ul role="list" className="mt-2 space-y-2">
								<li>
									<Link
										target="_blank"
										rel="noopener noreferrer"
										href="https://nestjs.com/"
										className="text-gray-100 transition-colors duration-300 hover:underline"
									>
										Nest.js
									</Link>
								</li>
								<li>
									<Link
										target="_blank"
										rel="noopener noreferrer"
										href="https://www.prisma.io/"
										className="text-gray-100 transition-colors duration-300 hover:underline"
									>
										Prisma
									</Link>
								</li>
								<li>
									<Link
										target="_blank"
										rel="noopener noreferrer"
										href="https://www.sqlite.org/index.html"
										className="text-gray-100 transition-colors duration-300 hover:underline"
									>
										SQLite
									</Link>
								</li>
								<li>
									<Link
										target="_blank"
										rel="noopener noreferrer"
										href="https://turbo.build/"
										className="text-gray-100 transition-colors duration-300 hover:underline"
									>
										Turbo Repo
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<p className="font-semibold tracking-wide text-gray-100">
								Dare Drop
							</p>
							<ul role="list" className="mt-2 space-y-2">
								<li>
									<Link
										target="_blank"
										rel="noopener noreferrer"
										href="https://daredrop.com/"
										className="text-gray-100 transition-colors duration-300 hover:underline"
									>
										daredrop.com
									</Link>
								</li>

								<li>
									<Link
										target="_blank"
										rel="noopener noreferrer"
										href="https://www.linkedin.com/company/dare-drop/"
										className="text-gray-100 transition-colors duration-300 hover:underline"
									>
										Linkedin
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="border-deep-purple-accent-200 flex flex-col justify-between border-t pb-10 pt-5 sm:flex-row">
					<p className="text-sm text-gray-100">
						© Copyright {year} Dare Drop. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};
