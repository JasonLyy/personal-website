import 'styled-components';
import { Theme } from './components/theme';

declare module 'styled-components' {
  // need to disable no-empty-interface to allow declaration merging.
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
