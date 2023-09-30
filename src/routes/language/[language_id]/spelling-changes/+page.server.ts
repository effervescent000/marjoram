import type { Actions, ServerLoad } from '@sveltejs/kit';

import { GET, POST } from '$lib/utils/api-service';
import { getAllFormData, getToken } from '$lib/utils/general-utils';
import { SoundChangeRulesSchema } from '$lib/schema/sc-schema';
import { appendRuleHeader } from '$lib/utils/sound-change-utils';

export const load: ServerLoad = async ({ cookies }) => {
  const token = getToken(cookies);
  const response: unknown[] = await GET('/sc', { token, params: { role: 'spelling' } });
  const rules = response.map((val) => SoundChangeRulesSchema.parse(val));
  return { spellingRules: rules[0] };
};

export const actions: Actions = {
  upsert: async ({ request, cookies }) => {
    const formData = await request.formData();
    const values = getAllFormData<Record<string, string | number>>(formData);
    await POST('/sc', {
      token: getToken(cookies),
      body: [{ ...values, content: appendRuleHeader(values.content as string) }]
    });
  }
};
