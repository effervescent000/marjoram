import { redirect, type Actions } from '@sveltejs/kit';

import type { Language } from '$lib/types/language-types';

import { POST } from '$lib/utils/api-service';
import { getAllFormData, getToken } from '$lib/utils/general-utils';
import { URLS } from '$lib/constants/url-constants';

export const actions: Actions = {
  default: async ({ cookies, request }) => {
    const data = getAllFormData<Language>(await request.formData());
    await POST(URLS.languageRoot, {
      token: getToken(cookies),
      body: [data]
    });
    throw redirect(303, '/language');
  }
};
