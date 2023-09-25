import type { Route } from '$lib/types/common-types';

export const NAV_ROUTES: Route[] = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Language',
    path: '/language',
    requiresLogin: true
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
