import type { z } from 'zod';

import type { SoundChangeRulesSchema } from '$lib/schema/sc-schema';

export type SoundChangeRules = z.infer<typeof SoundChangeRulesSchema>;
