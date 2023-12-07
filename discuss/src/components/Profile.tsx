'use client';

import { useSession } from 'next-auth/react';

export default function Profile() {
  const session = useSession();

  return (
    <div>
      {session.data?.user
        ? `From client: ${JSON.stringify(session.data.user)}`
        : 'From client: user is NOT signed in'}
    </div>
  );
}
