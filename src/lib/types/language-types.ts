import type { z } from 'zod';
import type { LangSchema } from '$lib/schema/language-schema';

export type Language = z.infer<typeof LangSchema>;
