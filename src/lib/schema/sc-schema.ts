import { z } from 'zod';

export const SoundChangeRulesSchema = z.object({
  id: z.number(),
  name: z.string().nullable(),
  content: z.string(),
  role: z.string().nullable(),
  language_id: z.number()
});
