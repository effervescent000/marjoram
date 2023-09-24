export type ButtonStyles = 'plain' | 'action' | 'warning' | 'danger';
export type ButtonShapes = 'plain' | 'circle';

export interface Route {
  label: string;
  path: string;
  requiresLogin?: boolean;
  children?: Route[];
}
