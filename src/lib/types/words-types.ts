import type { z } from 'zod';

import type { WordLinkSchema, WordSchema } from '$lib/schema/words-schema';

export type WordLink = z.infer<typeof WordLinkSchema>;
export type Word = z.infer<typeof WordSchema>;

export interface WordFilters {
  content?: string;
  definition?: string;
  partOfSpeech?: string;
}
