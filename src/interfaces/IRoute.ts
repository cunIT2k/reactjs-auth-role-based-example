import { ReactNode } from 'react';

export interface IRouter {
  requiredAuth?: boolean;
  element?: ReactNode;
  path?: string;
  children?: IRouter[];
}
