'use client';

import type { Snippet } from '@prisma/client';
import Editor from '@monaco-editor/react';
import { useState, useTransition } from 'react';
import * as actions from '@/actions';

type Props = { snippet: Snippet };

export default function SnippetEditForm({ snippet }: Props) {
  const [code, setCode] = useState(snippet.code);
  const [, startTransition] = useTransition();

  const handleEditorChange = (value: string = '') => {
    setCode(code);
  };

  const editSnippet = () => {
    startTransition(async () => {
      await actions.editSnippet(snippet.id, code);
    });
  };

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <button className="p-2 border rounded" onClick={editSnippet}>
        Save
      </button>
    </div>
  );
}
