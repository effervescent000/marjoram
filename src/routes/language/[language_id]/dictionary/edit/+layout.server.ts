import type { ServerLoad } from '@sveltejs/kit';

import type { WordLink } from '$lib/types/words-types';

import { WordLinkSchema } from '$lib/schema/words-schema';

import { GET } from '$lib/utils/api-service';
import { getToken } from '$lib/utils/general-utils';
import { WordClassSchema } from '$lib/schema/grammar-schema';

export const load: ServerLoad = async ({ cookies, params }) => {
  const token = getToken(cookies);
  const wordLinkResponse = await GET('/word_links/', { token });
  const wordLinks: WordLink[] = wordLinkResponse.map((wordlink: unknown) =>
    WordLinkSchema.parse(wordlink)
  );
  const wordClassResponse: unknown[] = await GET(
    `/word_classes/by_language/${params.language_id}`,
    { token }
  );
  const wordClasses = wordClassResponse.map((x) => WordClassSchema.parse(x));
  return { wordLinks, wordClasses };
};
