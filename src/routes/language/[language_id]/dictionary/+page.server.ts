import { error, type Actions } from '@sveltejs/kit';

import { DELETE } from '$lib/utils/api-service';
import { getToken } from '$lib/utils/general-utils';

export const actions: Actions = {
  deleteWord: async ({ request, cookies }) => {
    const data = await request.formData();
    const wordId = data.get('id')?.toString();
    if (wordId) {
      await DELETE(`/words/${wordId}`, { token: getToken(cookies) });
    } else {
      throw error(400, 'Invalid word id');
    }
  }
};
