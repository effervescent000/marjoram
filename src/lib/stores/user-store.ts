import { writable } from 'svelte/store';

import type { User } from '$lib/types/auth-types';

export const userStore = writable<User>();
