import { z } from 'zod';

export const WordClassSchema = z.object({
  id: z.number(),
  name: z.string(),
  abbreviation: z.string(),
  part_of_speech: z.string(),
  language_id: z.number()
});
