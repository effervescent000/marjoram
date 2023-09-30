import type { ServerLoad } from '@sveltejs/kit';

import { POST } from '$lib/utils/api-service';
import { getToken } from '$lib/utils/general-utils';
import { SoundChangeResultSchema } from '$lib/schema/sc-schema';

export const load: ServerLoad = async ({ cookies, params }) => {
  const token = getToken(cookies);
  const spelling_rules_id = cookies.get('spelling_rules_id');
  if (spelling_rules_id) {
    const spellingResponse: unknown = await POST('/sc/apply', {
      token,
      body: [{ sound_changes_id: spelling_rules_id, word_list: [params.word_id] }]
    });
    const spelling = SoundChangeResultSchema.parse(spellingResponse);
    return { spelling };
  }
};
