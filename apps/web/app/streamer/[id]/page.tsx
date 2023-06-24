import Image from 'next/image';
import { Container } from '../../../components/inc/Container';
import { PageHeader } from '../../../components/inc/PageHeader';

export default function StreamerPage() {
	const name = 'Blowek';
	const platform = 'Twitch';
	const description =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, dolorum dolor, ut, velit eius iusto fugiat dolorem eaque consequatur eos tempore veniam animi earum amet expedita tenetur dicta alias';

	return (
		<Container size="md">
			<section>
				<div className="mb-8">
					<PageHeader>Streamer</PageHeader>
				</div>

				<article>
					<div className="flex flex-col items-center gap-5 md:flex-row md:items-start">
						<div className="relative h-[300px] w-[300px] min-w-[300px]">
							<Image
								src="https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png"
								alt=""
								fill
							/>
						</div>

						<div className="text-gray-100">
							<ul role="list" className="flex flex-col gap-1">
								<li>
									<span className="mr-1 font-bold">Name:</span>
									<span>{name}</span>
								</li>
								<li>
									<span className="mr-1 font-bold">Platform:</span>
									<span>{platform}</span>
								</li>
								<li>
									<span className="mr-1 font-bold">Description:</span>
									<div>{description}</div>
								</li>
							</ul>
						</div>
					</div>
				</article>
			</section>
		</Container>
	);
}
