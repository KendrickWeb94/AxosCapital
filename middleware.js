import { authMiddleware } from '@clerk/nextjs';



export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware(async (req, res) => {

}, {
  publicRoutes: ['/', '/profile', '/sign-up', '/sign-in'],
});
