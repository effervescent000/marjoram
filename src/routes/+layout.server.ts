import type { ServerLoad } from '@sveltejs/kit';

import { UserSchema } from '$lib/schema/auth-schema';

import { GET } from '$lib/utils/api-service';

export const load: ServerLoad = async ({ cookies }) => {
  const token = cookies.get('access_token');
  const response = await GET('/users/me', { token });
  try {
    const user = UserSchema.parse(response);
    return { user };
  } catch (error) {
    return undefined;
  }
};
