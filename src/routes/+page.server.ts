import type { Actions } from '@sveltejs/kit';

import { AccessTokenSchema } from '$lib/schema/auth-schema';

import { GET, login } from '$lib/utils/api-service';
import { getToken } from '$lib/utils/general-utils';
import { SoundChangeRulesSchema } from '$lib/schema/sc-schema';

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
  },

  selectLanguage: async ({ cookies, request }) => {
    const formData = await request.formData();
    const lang_id = formData.get('language')?.toString();
    if (lang_id) {
      const response: unknown[] = await GET('/sc', {
        token: getToken(cookies),
        params: { role: 'spelling' }
      });
      if (response.length) {
        const rules = response.map((r) => SoundChangeRulesSchema.parse(r));
        cookies.set('spelling_rules_id', rules[0].id.toString());
      }
    }
  }
};
