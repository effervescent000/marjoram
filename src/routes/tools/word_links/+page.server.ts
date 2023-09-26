import type { Actions, ServerLoad } from '@sveltejs/kit';

import { GET, POST } from '$lib/utils/api-service';
import { getAllFormData, getToken } from '$lib/utils/general-utils';
import { WordLinkSchema } from '$lib/schema/words-schema';
import type { WordLink } from '$lib/types/words-types';

export const load: ServerLoad = async ({ cookies }) => {
  const response = await GET('/word_links/', { token: getToken(cookies) });
  const wordLinks: WordLink[] = response.map((wordlink: unknown) => WordLinkSchema.parse(wordlink));
  return { wordLinks };
};

export const actions: Actions = {
  upsert: async ({ request, cookies }) => {
    const data = await request.formData();
    const token = getToken(cookies);
    await POST('/word_links', { body: [getAllFormData(data)], token });
  }
};
