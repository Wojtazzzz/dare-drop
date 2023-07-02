'use client';

import { ErrorMessage, Formik } from 'formik';
import { Input, Button, Textarea } from '@material-tailwind/react';
import { useJoinForm } from './useJoinForm';
import { joinFormSchema } from './joinFormSchema';
import { ValidationError } from './ValidationError';
import { SelectPlatform } from './selectPlatform/SelectPlatform';
import { Container } from '../../inc/Container';
import type { JoinUsFormValues } from '../../../utils/types';
import { ErrorAlert } from '../../inc/alerts/ErrorAlert';
import { SuccessAlert } from '../../inc/alerts/SuccessAlert';

export const JoinForm = () => {
	const { submit, isSuccess, isError, error } = useJoinForm();

	return (
		<Formik
			initialValues={
				{
					name: '',
					platform: 'twitch',
					description: '',
				} satisfies JoinUsFormValues
			}
			validationSchema={joinFormSchema}
			onSubmit={(values, { resetForm }) => submit(values, resetForm)}
		>
			{({
				values,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
			}) => (
				<Container size="md">
					<div className="flex flex-col gap-y-8">
						{isError && <ErrorAlert message={error} />}

						{isSuccess && (
							<SuccessAlert message="Streamer created successfully" />
						)}

						<form
							className="flex flex-col gap-y-5"
							onSubmit={handleSubmit}
						>
							<div>
								<Input
									size="lg"
									label="Name"
									id="name"
									name="name"
									aria-label="Name"
									color="deep-purple"
									labelProps={{
										className:
											'peer-focus:!text-gray-100 !text-gray-400',
									}}
									className="text-gray-100"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.name}
								/>

								<ErrorMessage
									name="name"
									component={ValidationError}
								/>
							</div>

							<div>
								<SelectPlatform />

								<ErrorMessage
									name="platform"
									component={ValidationError}
								/>
							</div>

							<div>
								<Textarea
									size="lg"
									label="Description"
									id="description"
									name="description"
									aria-label="Description"
									color="deep-purple"
									labelProps={{
										className:
											'peer-focus:!text-gray-100 !text-gray-400',
									}}
									className="text-gray-100"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.description}
								/>

								<ErrorMessage
									name="description"
									component={ValidationError}
								/>
							</div>

							<Button
								type="submit"
								className="mt-6"
								variant="filled"
								color="deep-purple"
								fullWidth
								disabled={isSubmitting}
							>
								Create
							</Button>
						</form>
					</div>
				</Container>
			)}
		</Formik>
	);
};
