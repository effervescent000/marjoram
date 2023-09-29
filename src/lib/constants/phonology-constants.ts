import type { DescriptivePhone } from '$lib/types/phonology-types';

import { lookupFromArrayByKey } from '$lib/utils/general-utils';

export const QUALITIES = {
  long: 'long'
};

export const HEIGHT = [
  'high',
  'near-high',
  'high-mid',
  'mid',
  'low-mid',
  'near-low',
  'low'
] as const;

export const FRONTNESS = ['front', 'near-front', 'central', 'near-back', 'back'] as const;

export const PLACE = [
  'bilabial',
  'labiodental',
  'dental',
  'alveolar',
  'post-alveolar',
  'retroflex',
  'alveolo-palatal',
  'palatal',
  'labiovelar',
  'velar',
  'uvular',
  'pharyngeal',
  'epiglottal',
  'glottal'
] as const;

export const MANNER = [
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

export const CONSONANTS: DescriptivePhone[] = [
  {
    base_phone: 'm',
    manner: 'nasal',
    place: 'bilabial',
    vocalic: false,
    voiced: true
  },
  {
    base_phone: 'n',
    manner: 'nasal',
    place: 'alveolar',
    vocalic: false,
    voiced: true
  },
  {
    base_phone: 'ɲ',
    manner: 'nasal',
    place: 'palatal',
    vocalic: false,
    voiced: true
  },
  {
    base_phone: 'ŋ',
    manner: 'nasal',
    place: 'velar',
    vocalic: false,
    voiced: true
  },
  {
    base_phone: 'ɴ',
    manner: 'nasal',
    place: 'uvular',
    vocalic: false,
    voiced: true
  },
  {
    base_phone: 'p',
    manner: 'plosive',
    place: 'bilabial',
    vocalic: false,
    voiced: false
  },
  {
    base_phone: 'b',
    manner: 'plosive',
    place: 'bilabial',
    vocalic: false,
    voiced: true
  },
  {
    base_phone: 't',
    manner: 'plosive',
    place: 'alveolar',
    vocalic: false,
    voiced: false
  },
  {
    base_phone: 'd',
    manner: 'plosive',
    place: 'alveolar',
    vocalic: false,
    voiced: true
  },
  {
    base_phone: 'c',
    manner: 'plosive',
    place: 'palatal',
    vocalic: false,
    voiced: false
  },
  {
    base_phone: 'ɟ',
    manner: 'plosive',
    place: 'palatal',
    vocalic: false,
    voiced: true
  },
  {
    base_phone: 'k',
    manner: 'plosive',
    place: 'velar',
    vocalic: false,
    voiced: false
  },
  {
    base_phone: 'g',
    manner: 'plosive',
    place: 'velar',
    vocalic: false,
    voiced: true
  },
  {
    base_phone: 'q',
    manner: 'plosive',
    place: 'uvular',
    vocalic: false,
    voiced: false
  },
  {
    base_phone: 'ɢ',
    manner: 'plosive',
    place: 'uvular',
    vocalic: false,
    voiced: true
  },
  {
    base_phone: 'Φ',
    manner: 'fricative',
    place: 'bilabial',
    vocalic: false,
    voiced: false
  },
  {
    base_phone: 'β',
    manner: 'fricative',
    place: 'bilabial',
    vocalic: false,
    voiced: true
  },
  {
    base_phone: 'θ',
    manner: 'fricative',
    place: 'dental',
    vocalic: false,
    voiced: false
  },
  {
    base_phone: 'ð',
    manner: 'fricative',
    place: 'dental',
    vocalic: false,
    voiced: true
  },
  {
    base_phone: 's',
    manner: 'fricative',
    place: 'alveolar',
    vocalic: false,
    voiced: false
  },
  {
    base_phone: 'z',
    manner: 'fricative',
    place: 'alveolar',
    vocalic: false,
    voiced: true
  },
  {
    base_phone: 'ʃ',
    manner: 'fricative',
    place: 'post-alveolar',
    vocalic: false,
    voiced: false
  },
  {
    base_phone: 'ʒ',
    manner: 'fricative',
    place: 'post-alveolar',
    vocalic: false,
    voiced: true
  },
  {
    base_phone: 'x',
    manner: 'fricative',
    place: 'velar',
    vocalic: false,
    voiced: false
  },
  {
    base_phone: 'ɣ',
    manner: 'fricative',
    place: 'velar',
    vocalic: false,
    voiced: true
  },
  {
    base_phone: 'h',
    manner: 'fricative',
    place: 'glottal',
    vocalic: false,
    voiced: false
  },
  {
    base_phone: 'ɦ',
    manner: 'fricative',
    place: 'glottal',
    vocalic: false,
    voiced: true
  },
  {
    base_phone: 'l',
    manner: 'lateral approximant',
    place: 'alveolar',
    vocalic: false,
    voiced: true
  },
  {
    base_phone: 'ʎ',
    manner: 'lateral approximant',
    place: 'palatal',
    vocalic: false,
    voiced: true
  },
  {
    base_phone: 'j',
    manner: 'approximant',
    place: 'palatal',
    vocalic: false,
    voiced: true
  },
  {
    base_phone: 'w',
    manner: 'approximant',
    place: 'velar',
    vocalic: false,
    voiced: true
  },
  {
    base_phone: 'r',
    manner: 'trill',
    place: 'alveolar',
    vocalic: false,
    voiced: true
  }
];

export const consonantLookup: Record<string, DescriptivePhone> = lookupFromArrayByKey(
  CONSONANTS,
  'base_phone'
);

export const VOWELS: DescriptivePhone[] = [
  {
    base_phone: 'a',
    vocalic: true,
    voiced: true,
    height: 'low',
    frontness: 'near-front'
  },
  {
    base_phone: 'ä',
    vocalic: true,
    voiced: true,
    height: 'low',
    frontness: 'central'
  },
  {
    base_phone: 'i',
    height: 'high',
    frontness: 'front',
    vocalic: true,
    voiced: true
  },
  {
    base_phone: 'y',
    height: 'high',
    frontness: 'front',
    vocalic: true,
    voiced: true,
    rounded: true
  },
  {
    base_phone: 'e',
    height: 'near-high',
    frontness: 'front',
    vocalic: true,
    voiced: true
  },
  {
    base_phone: 'ɛ',
    height: 'low-mid',
    frontness: 'front',
    vocalic: true,
    voiced: true
  },
  {
    base_phone: 'æ',
    height: 'near-low',
    frontness: 'front',
    vocalic: true,
    voiced: true
  },
  {
    base_phone: 'ɪ',
    height: 'near-high',
    frontness: 'near-front',
    vocalic: true,
    voiced: true
  },
  {
    base_phone: 'o',
    height: 'near-high',
    frontness: 'back',
    vocalic: true,
    voiced: true
  }
];

export const vowelLookup: Record<string, DescriptivePhone> = lookupFromArrayByKey(
  VOWELS,
  'base_phone'
);
