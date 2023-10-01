import type { z } from 'zod';
import type { WordClassSchema } from '$lib/schema/grammar-schema';

export type WordClass = z.infer<typeof WordClassSchema>;
