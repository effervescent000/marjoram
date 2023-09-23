import { POST, login } from '$lib/utils/api-service';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
  signUp: async ({ cookies, request }) => {
    const data = await request.formData();
    const result = await POST('/users/register', {
      token: cookies.get('token'),
      body: {
        new_user: {
          email: data.get('username')?.toString(),
          password: data.get('password')?.toString()
        }
      }
    });
    console.log(result);
    return result;
  },
  login: async ({ request }) => {
    const data = await request.formData();
    const result = await login({
      username: data.get('username')?.toString(),
      password: data.get('password')?.toString()
    });

    return result;
  }
};
