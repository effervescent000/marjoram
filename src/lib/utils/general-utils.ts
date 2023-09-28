import type { Cookies } from '@sveltejs/kit';

export const getToken = (cookies: Cookies) => cookies.get('access_token');

export const getAllFormData = <T>(formData: FormData) =>
  [...formData.entries()].reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {} as T);

export const lookupFromArrayByKey = (array: Record<string, any>[], key: string) =>
  array.reduce((acc, cur) => ({ ...acc, [cur[key]]: cur }), {});
