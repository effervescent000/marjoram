import type { z } from 'zod';

import type { WordLinkSchema } from '$lib/schema/words-schema';

export type WordLink = z.infer<typeof WordLinkSchema>;
