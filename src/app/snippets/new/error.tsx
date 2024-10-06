"use client";

type ErrorPageProps = {
	error: Error;
	reset: () => void;
};

export default function ErrorPage({ error }: ErrorPageProps) {
	// component that gets rendered when an error is thrown: NOT RECOMMENDED, poor UX
	return <div>{error.message}</div>;
}
