import type { ServerLoad } from '@sveltejs/kit';

import { PhoneSchema } from '$lib/schema/phonology-schema';

import { GET } from '$lib/utils/api-service';
import { getToken } from '$lib/utils/general-utils';

export const load: ServerLoad = async ({ cookies, params }) => {
  const response: unknown[] = await GET(`/phonology/by_language/${params.language_id}`, {
    token: getToken(cookies)
  });
  const phones = response.map((x) => PhoneSchema.parse(x));
  return { phonology: phones };
};
