import { SvelteComponentTyped } from 'svelte';
import { Color } from './shared';

export interface IDropdownToggleProps {
  caret?: boolean;
  color?: Color;
  disabled?: boolean;
  outline?: boolean;
  ariaHaspopup?: boolean;
  ariaLabel?: string;
  split?: boolean;
  tag?: string;
  nav?: boolean;

  size?: string;
}

declare class DropdownToggle extends SvelteComponentTyped<
  IDropdownToggleProps
> {}
export default DropdownToggle;
