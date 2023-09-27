import { writable } from 'svelte/store';

import type { Word } from '$lib/types/words-types';

export const editTargetWord = writable<Word>();
