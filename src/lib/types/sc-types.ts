import type { z } from 'zod';

import type { SoundChangeResultSchema, SoundChangeRulesSchema } from '$lib/schema/sc-schema';

export type SoundChangeRules = z.infer<typeof SoundChangeRulesSchema>;

export type SoundChangeResult = z.infer<typeof SoundChangeResultSchema>;
