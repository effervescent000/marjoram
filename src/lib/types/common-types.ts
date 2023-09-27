import type { SIZES } from '$lib/constants/styling-constants';

export type ButtonStyles = 'plain' | 'action' | 'warning' | 'danger';
export type ButtonShapes = 'plain' | 'circle';

export type InputStyles = 'plain' | 'secret';

export type Sizes = (typeof SIZES)[number];

export interface Route {
  label: string;
  path: string;
  requiresLogin?: boolean;
  children?: Route[];
}
