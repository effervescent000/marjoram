import type { ServerLoad } from '@sveltejs/kit';

import { GET } from '$lib/utils/api-service';
import { getToken } from '$lib/utils/general-utils';
import { SoundChangeRulesSchema } from '$lib/schema/sc-schema';

export const load: ServerLoad = async ({ cookies }) => {
  const token = getToken(cookies);
  const response: unknown[] = await GET('/sc', { token, params: { role: 'spelling' } });
  const rules = response.map((val) => SoundChangeRulesSchema.parse(val));
  return { spellingRules: rules[0] };
};
