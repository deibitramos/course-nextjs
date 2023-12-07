'use client';

import {
  Avatar,
  Button,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import { Fragment } from 'react';
import * as authActions from '@/actions/auth';
import { useSession } from 'next-auth/react';

export default function HeaderAuth() {
  const session = useSession();

  if (session.status === 'loading') {
    return null;
  }

  if (session.data?.user) {
    return (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.data.user.image || ''} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={authActions.signOut}>
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Fragment>
      <NavbarItem>
        <form action={authActions.signIn}>
          <Button type="submit" color="secondary" variant="bordered">
            Sign in
          </Button>
        </form>
      </NavbarItem>
      <NavbarItem>
        <form action={authActions.signIn}>
          <Button color="primary" variant="flat">
            Sign Up
          </Button>
        </form>
      </NavbarItem>
    </Fragment>
  );
}
