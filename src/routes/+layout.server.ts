import type { ServerLoad } from '@sveltejs/kit';

import { UserSchema } from '$lib/schema/auth-schema';
import { LangSchema } from '$lib/schema/language-schema';

import { GET } from '$lib/utils/api-service';
import { URLS } from '$lib/constants/url-constants';

export const load: ServerLoad = async ({ cookies }) => {
  const token = cookies.get('access_token');
  const userResponse = await GET('/users/me', { token });
  const langsResponse = await GET(URLS.languageRoot, { token });
  try {
    const user = UserSchema.parse(userResponse);
    const languages = langsResponse.map((lang: unknown) => LangSchema.parse(lang));
    return { user, languages };
  } catch (error) {
    return undefined;
  }
};
