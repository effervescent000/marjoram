import { redirect, type Actions, type ServerLoad } from '@sveltejs/kit';

import type { WordLink } from '$lib/types/words-types';

import { WordLinkSchema } from '$lib/schema/words-schema';

import { GET, POST } from '$lib/utils/api-service';
import { getAllFormData, getToken } from '$lib/utils/general-utils';

export const load: ServerLoad = async ({ cookies }) => {
  const response = await GET('/word_links/', { token: getToken(cookies) });
  const wordLinks: WordLink[] = response.map((wordlink: unknown) => WordLinkSchema.parse(wordlink));
  return { wordLinks };
};

export const actions: Actions = {
  upsert: async ({ cookies, request, params }) => {
    const data = await request.formData();
    await POST('/words', {
      token: getToken(cookies),
      body: [{ ...getAllFormData(data), word_link_ids: data.getAll('word_link_ids') }]
    });
    throw redirect(303, `/language/${params.language_id}/dictionary`);
  }
};
