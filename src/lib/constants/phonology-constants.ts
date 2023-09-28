import type { DescriptivePhone } from '$lib/types/phonology-types';
import { lookupFromArrayByKey } from '$lib/utils/general-utils';

export const QUALITIES = {
  long: 'long'
};

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
  }
];

export const consonantLookup: Record<string, DescriptivePhone> = lookupFromArrayByKey(
  CONSONANTS,
  'base_phone'
);
