import { redirect, type Actions } from '@sveltejs/kit';

import { POST } from '$lib/utils/api-service';
import { getAllFormData, getToken } from '$lib/utils/general-utils';

export const actions: Actions = {
  upsert: async ({ cookies, request, params }) => {
    const data = await request.formData();
    await POST('/words', {
      token: getToken(cookies),
      body: [
        {
          ...getAllFormData(data),
          word_link_ids: data.getAll('word_link_ids'),
          word_class_ids: data.getAll('word_class_ids')
        }
      ]
    });
    throw redirect(303, `/language/${params.language_id}/dictionary`);
  }
};
