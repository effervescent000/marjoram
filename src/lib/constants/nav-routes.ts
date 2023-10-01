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
        label: 'Phonology',
        path: '/phonology',
        requiresLogin: true
      },
      {
        label: 'Dictionary',
        path: '/dictionary'
      },
      {
        label: 'Pronunciation Rules',
        path: '/spelling-changes',
        requiresLogin: true
      },
      {
        label: 'Grammar',
        path: '/grammar',
        children: [
          {
            label: 'Word Classes',
            path: '/word-classes',
            requiresLogin: true
          }
        ]
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
