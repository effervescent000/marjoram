import type { z } from 'zod';

import type { PhoneSchema } from '$lib/schema/phonology-schema';
import type { FRONTNESS, HEIGHT, MANNER, PLACE } from '$lib/constants/phonology-constants';

export type Phone = z.infer<typeof PhoneSchema>;

export interface DescriptivePhone {
  base_phone: string;
  place?: (typeof PLACE)[number];
  manner?: (typeof MANNER)[number];
  height?: (typeof HEIGHT)[number];
  frontness?: (typeof FRONTNESS)[number];
  voiced: boolean;
  vocalic: boolean;
  rounded?: boolean;
}

export type ComposedPhoneData = DescriptivePhone & Phone;
