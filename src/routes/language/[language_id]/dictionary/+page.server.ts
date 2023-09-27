import { error, type Actions, type ServerLoad } from '@sveltejs/kit';
import { invalidateAll } from '$app/navigation';

import { WordSchema } from '$lib/schema/words-schema';

import { DELETE, GET } from '$lib/utils/api-service';
import { getToken } from '$lib/utils/general-utils';

export const load: ServerLoad = async ({ cookies, params }) => {
  const response: unknown[] = await GET(`/words/by_language/${params.language_id}`, {
    token: getToken(cookies)
  });
  const words = response.map((x) => WordSchema.parse(x));
  return { words };
};

export const actions: Actions = {
  deleteWord: async ({ request, cookies }) => {
    const data = await request.formData();
    const wordId = data.get('id')?.toString();
    if (wordId) {
      await DELETE(`/words/${wordId}`, { token: getToken(cookies) });
      await invalidateAll();
    } else {
      throw error(400, 'Invalid word id');
    }
  }
};
