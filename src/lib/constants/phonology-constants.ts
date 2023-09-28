import type { DescriptivePhone } from '$lib/types/phonology-types';

export const QUALITIES = {
  long: 'long'
};

export const CONSONANTS: DescriptivePhone[] = [
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
