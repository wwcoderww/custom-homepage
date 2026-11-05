// frontend/lib/auth-client.ts
import { adminClient, inferAdditionalFields } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';

const isDev = process.env.NODE_ENV === 'development';

export const authClient = createAuthClient({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth`,
  plugins: [
    adminClient(),
    inferAdditionalFields({
      user: {
        role: {
          type: 'string',
          required: false,
          defaultValue: 'user',
          input: false,
        },
      },
    }),
  ],
  fetchOptions: {
    credentials: 'include',

    ...(isDev && {
      auth: {
        type: 'Bearer',
        token: () => localStorage.getItem('better-auth.session_token') || '',
      },
      onSuccess: (ctx) => {
        const token = ctx.response.headers.get('set-auth-token');
        if (token) {
          localStorage.setItem('better-auth.session_token', token);
        }
      },
    }),
  },
});
