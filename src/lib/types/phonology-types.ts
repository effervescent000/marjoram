import type { z } from 'zod';

import type { PhoneSchema } from '$lib/schema/phonology-schema';

export type Phone = z.infer<typeof PhoneSchema>;
