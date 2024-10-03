import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/db";
import * as actions from "@/actions";

type SnippetShowPageProps = {
	params: {
		id: string;
	};
};

export default async function SnippetShowPage({
	params,
}: SnippetShowPageProps) {
	await new Promise((resolve) => setTimeout(resolve, 500));

	const id = params.id;
	const snippet = await db.snippet.findFirst({ where: { id: parseInt(id) } });

	if (!snippet) {
		return notFound();
	}

	const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

	return (
		<div>
			<div className='flex m-4 justify-between items-center'>
				<h1 className='text-xl font-bold'>{snippet.title}</h1>
				<div className='flex gap-4'>
					<Link
						href={`/snippets/${snippet.id}/edit`}
						className='p-2 border rounded'
					>
						Edit
					</Link>
					<form action={deleteSnippetAction}>
						<button className='p-2 border rounded'>Delete</button>
					</form>
				</div>
			</div>

			{/* Displays text exactly as it appears in the code */}
			<pre className='p-3 border rounded bg-gray-200 border-gray-200'>
				{snippet.code}
			</pre>
		</div>
	);
}
