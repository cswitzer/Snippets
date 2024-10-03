"use client";

import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import * as actions from "@/actions";

type SnippetEditFormProps = {
	snippet: Snippet;
};

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
	const [code, setCode] = useState<string | undefined>(snippet.code);

	function handleEditorChange(value: string | undefined) {
		setCode(value);
	}

	const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

	return (
		<div>
			<Editor
				height='40vh'
				theme='vs-dark'
				language='javascript'
				defaultValue={snippet.code}
				options={{ minimap: { enabled: false } }}
				onChange={handleEditorChange}
			/>
			<form action={editSnippetAction}>
				<button type='submit' className='p-2 border rounded'>
					Save
				</button>
			</form>
		</div>
	);
}
