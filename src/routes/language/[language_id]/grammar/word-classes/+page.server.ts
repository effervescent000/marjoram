import type { ServerLoad } from '@sveltejs/kit';

import { WordClassSchema } from '$lib/schema/grammar-schema';
import { GET } from '$lib/utils/api-service';
import { getToken } from '$lib/utils/general-utils';

export const load: ServerLoad = async ({ cookies, params }) => {
  const token = getToken(cookies);
  const response: unknown[] = await GET(`/word_classes/by_language/${params.language_id}`, {
    token
  });
  const wordClasses = response.map((x) => WordClassSchema.parse(x));
  return { wordClasses };
};
