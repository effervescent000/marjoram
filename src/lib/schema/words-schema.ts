import { z } from 'zod';

export const WordLinkSchema = z.object({
  id: z.number(),
  definition: z.string(),
  hint: z.string().nullable(),
  part_of_speech: z.string()
});

export const WordSchema = z.object({
  id: z.number(),
  word: z.string(),
  part_of_speech: z.string(),
  notes: z.string().nullable(),

  word_links: z.array(WordLinkSchema),

  language_id: z.number()
});
