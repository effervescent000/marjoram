import { z } from 'zod';

export const LangSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().nullable()
});
