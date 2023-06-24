'use client';

import { Card, Typography } from '@material-tailwind/react';

const TABLE_HEAD = ['Name', 'Description', 'Votes', 'Options'];

const TABLE_ROWS = [
	{
		name: 'John Michael',
		description: 'Manager',
		votes: 24,
	},
	{
		name: 'Alexa Liras',
		description: 'Developer',
		votes: 24,
	},
	{
		name: 'Laurent Perrier',
		description: 'Executive',
		votes: 24,
	},
	{
		name: 'Michael Levi',
		description: 'Developer',
		votes: 24,
	},
	{
		name: 'Richard Gran',
		description: 'Manager',
		votes: 24,
	},
	{
		name: 'John Michael',
		description: 'Manager',
		votes: 24,
	},
	{
		name: 'Alexa Liras',
		description: 'Developer',
		votes: 24,
	},
	{
		name: 'Laurent Perrier',
		description: 'Executive',
		votes: 24,
	},
	{
		name: 'Michael Levi',
		description: 'Developer',
		votes: 24,
	},
	{
		name: 'Richard Gran',
		description: 'Manager',
		votes: 24,
	},
];

export const StreamersList = () => {
	return (
		<Card className="h-full w-full overflow-scroll">
			<table className="w-full min-w-max table-auto text-left">
				<thead>
					<tr>
						{TABLE_HEAD.map((head) => (
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
					{TABLE_ROWS.map(({ name, description, votes }, index) => {
						const isLast = index === TABLE_ROWS.length - 1;
						const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

						return (
							<tr key={name}>
								<td className={classes}>
									<Typography
										variant="small"
										color="blue-gray"
										className="text-center font-normal"
									>
										{name}
									</Typography>
								</td>
								<td className={`${classes} bg-blue-gray-50/50`}>
									<Typography
										variant="small"
										color="blue-gray"
										className="text-center font-normal"
									>
										{description}
									</Typography>
								</td>
								<td className={classes}>
									<Typography
										variant="small"
										color="blue-gray"
										className="text-center font-normal"
									>
										{votes}
									</Typography>
								</td>
								<td className={`${classes} bg-blue-gray-50/50`}>
									<Typography
										as="a"
										href="#"
										variant="small"
										color="blue"
										className="text-center font-normal"
									>
										Edit
									</Typography>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</Card>
	);
};
