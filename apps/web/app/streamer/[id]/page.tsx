import Image from 'next/image';
import { API_URL } from '../../../utils/env';

type StreamerPageProps = {
	params: {
		id: number;
	};
};

const fetchStreamer = async (streamerId) => {
	const response = await fetch(`${API_URL}/streamer/${streamerId}`, {
		next: { revalidate: 10 },
	});

	return response.json();
};

export default async function StreamerPage({
	params: { id },
}: StreamerPageProps) {
	const { name, platform, description, image } = await fetchStreamer(id);

	return (
		<div className="flex flex-col items-center gap-5 md:flex-row md:items-start">
			<div className="relative h-[300px] w-[300px] min-w-[300px]">
				<Image
					src={
						image ??
						'https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png'
					}
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
	);
}
