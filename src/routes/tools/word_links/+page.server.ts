import type { ServerLoad } from '@sveltejs/kit';

import { GET } from '$lib/utils/api-service';
import { getToken } from '$lib/utils/general-utils';
import { WordLinkSchema } from '$lib/schema/words-schema';
import type { WordLink } from '$lib/types/words-types';

export const load: ServerLoad = async ({ cookies }) => {
  const response = await GET('/word_links/', { token: getToken(cookies) });
  const wordLinks: WordLink[] = response.map((wordlink: unknown) => WordLinkSchema.parse(wordlink));
  return { wordLinks };
};
