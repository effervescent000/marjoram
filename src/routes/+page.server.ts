import type { Actions } from '@sveltejs/kit';

import { AccessTokenSchema } from '$lib/schema/auth-schema';

import { login } from '$lib/utils/api-service';

export const actions: Actions = {
  // signUp: async ({ cookies, request }) => {
  //   const data = await request.formData();
  //   const result = await POST('/users/register', {
  //     token: cookies.get('token'),
  //     body: {
  //       email: data.get('username')?.toString(),
  //       password: data.get('password')?.toString()
  //     }
  //   });
  //   return result;
  // },
  login: async ({ cookies, request }) => {
    const data = await request.formData();
    const result = await login({
      username: data.get('username')?.toString(),
      password: data.get('password')?.toString()
    });
    const tokenData = AccessTokenSchema.parse(result);
    cookies.set('access_token', tokenData.access_token);
    cookies.set('refresh_token', tokenData.refresh_token);
  }
};
