import type { z } from 'zod';

import type { PhoneSchema } from '$lib/schema/phonology-schema';

export type Phone = z.infer<typeof PhoneSchema>;

const PLACE = [
  'bilabial',
  'labiodental',
  'dental',
  'alveolar',
  'post-alveolar',
  'retroflex',
  'alveolopalatal',
  'palatal',
  'labiovelar',
  'velar',
  'uvular',
  'pharyngeal',
  'epiglottal',
  'glottal'
] as const;

const MANNER = [
  'nasal',
  'plosive',
  'affricate',
  'fricative',
  'lateral fricative',
  'lateral approximant',
  'approximant',
  'trill',
  'tap',
  'click',
  'implosive'
] as const;

export interface DescriptivePhone {
  base_phone: string;
  place: (typeof PLACE)[number];
  manner: (typeof MANNER)[number];
  voiced: boolean;
  vocalic: boolean;
}
