import type { Route } from '$lib/types/common-types';

export const navRoutes: (language_id: number) => Route[] = (language_id: number) => [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Language',
    path: `/language/${language_id}`,
    children: [
      {
        label: 'Dictionary',
        path: '/dictionary'
      }
    ]
  },
  {
    label: 'Community Tools',
    path: '/tools',
    children: [
      {
        label: 'Word Links',
        path: '/word_links'
      }
    ]
  }
];
