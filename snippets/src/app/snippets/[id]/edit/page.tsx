import SnippetEditForm from '@/components/SnippetEditForm';
import { db } from '@/db';
import { notFound } from 'next/navigation';

type Props = { params: { id: string } };

export default async function SnippetEditPage(props: Props) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({ where: { id } });
  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
