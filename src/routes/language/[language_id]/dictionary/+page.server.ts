import type { ServerLoad } from '@sveltejs/kit';

import { WordSchema } from '$lib/schema/words-schema';

import { GET } from '$lib/utils/api-service';
import { getToken } from '$lib/utils/general-utils';

export const load: ServerLoad = async ({ cookies, params }) => {
  const response: unknown[] = await GET(`/words/by_language/${params.language_id}`, {
    token: getToken(cookies)
  });
  const words = response.map((x) => WordSchema.parse(x));
  return { words };
};
