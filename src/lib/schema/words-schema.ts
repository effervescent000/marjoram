import { z } from 'zod';
import { WordClassSchema } from './grammar-schema';

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
  word_classes: z.array(WordClassSchema),

  language_id: z.number()
});
