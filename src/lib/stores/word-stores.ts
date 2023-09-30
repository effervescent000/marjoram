import { writable } from 'svelte/store';

import type { WordFilters, Word } from '$lib/types/words-types';

export const wordsStore = writable<Word[]>([]);
export const wordFilters = writable<WordFilters>({});
