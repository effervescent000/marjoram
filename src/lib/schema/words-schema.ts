import { z } from 'zod';

export const WordLinkSchema = z.object({
  id: z.number(),
  definition: z.string(),
  hint: z.string().nullable(),
  part_of_speech: z.string()
});
