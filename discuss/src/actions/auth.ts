'use server';

import * as aut from '@/auth';

export async function signIn() {
  return aut.signIn('github');
}

export async function signOut() {
  return aut.signOut();
}
