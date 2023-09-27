import { z } from 'zod';

export const PhoneSchema = z.object({
  id: z.number(),
  base_phone: z.string(),
  quality: z.string().nullable(),
  composed_phone: z.string(),
  graph: z.string().nullable(),
  language_id: z.number()
});
