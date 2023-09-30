import type { ServerLoad } from '@sveltejs/kit';

import type { WordLink } from '$lib/types/words-types';

import { WordLinkSchema } from '$lib/schema/words-schema';

import { GET } from '$lib/utils/api-service';
import { getToken } from '$lib/utils/general-utils';

export const load: ServerLoad = async ({ cookies }) => {
  const token = getToken(cookies);
  const wordLinkResponse = await GET('/word_links/', { token });
  const wordLinks: WordLink[] = wordLinkResponse.map((wordlink: unknown) =>
    WordLinkSchema.parse(wordlink)
  );
  return { wordLinks };
};
