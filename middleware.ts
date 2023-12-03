import NexthAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NexthAuth(authConfig).auth;

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
