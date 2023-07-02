'use client';

import { Alert, Card, Typography } from '@material-tailwind/react';
import { useStreamersList } from './useStreamersList';
import { SpinnerLoader } from '../../inc/SpinnerLoader';
import { ArrowUp } from '../../icons/ArrowUp';
import { useVoteFor } from './useVoteFor';

export const StreamersList = () => {
	const { data, isLoading, isError } = useStreamersList();
	const {
		voteFor,
		isSuccess: IsVoteSuccess,
		isError: isVoteError,
		errorMessage: voteErrorMessage,
	} = useVoteFor();

	if (isLoading) return <SpinnerLoader />;

	if (isError) {
		return <span>IsError...</span>;
	}

	return (
		<div className="flex flex-col gap-y-4">
			{isVoteError && (
				<Alert color="red" variant="gradient">
					<span>{voteErrorMessage}</span>
				</Alert>
			)}

			{IsVoteSuccess && (
				<Alert color="green" variant="gradient">
					<span>You have voted for your favourite streamer</span>
				</Alert>
			)}

			<Card className="h-full w-full overflow-scroll">
				<table className="w-full min-w-max table-auto text-left">
					<thead>
						<tr>
							{['Name', 'Description', 'Votes'].map((head) => (
								<th
									key={head}
									className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
								>
									<Typography
										variant="small"
										color="blue-gray"
										className="text-center font-normal leading-none opacity-70"
									>
										{head}
									</Typography>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{data.map(({ id, name, description, votes }, index) => {
							const isLast = index === data.length - 1;
							const classes = isLast
								? 'p-4'
								: 'p-4 border-b border-blue-gray-50';

							return (
								<tr key={id}>
									<td className={classes}>
										<Typography
											variant="small"
											color="blue-gray"
											className="text-center font-normal"
										>
											<a
												href={`/streamer/${id}`}
												className="underline"
											>
												{name}
											</a>
										</Typography>
									</td>
									<td
										className={`${classes} bg-blue-gray-50/50`}
									>
										<Typography
											variant="small"
											color="blue-gray"
											className="text-center font-normal"
										>
											{description}
										</Typography>
									</td>
									<td className={classes}>
										<div className="flex w-full justify-center gap-3">
											<Typography
												variant="small"
												color="blue-gray"
												className="text-center font-normal"
											>
												{votes.length}
											</Typography>

											<button
												aria-label={`Vote for ${name}`}
												className="mt-0.5"
												onClick={() => voteFor(id)}
											>
												<ArrowUp />
											</button>
										</div>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</Card>
		</div>
	);
};
