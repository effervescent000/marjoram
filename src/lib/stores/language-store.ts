import { writable } from 'svelte/store';

import type { Language } from '$lib/types/language-types';

export const languageStore = writable<Language[]>();
export const selectedLanguage = writable<number>();
