<script lang="ts">
  import type { ButtonShapes, ButtonStyles } from '$lib/types/common-types';

  import { ACTION, CIRCLE, PLAIN, WARNING, DANGER } from '$lib/constants/styling-constants';

  export let onClick: (() => void) | undefined = undefined;
  export let type: 'submit' | 'button' | 'reset' = 'button';
  export let testid: string | undefined = undefined;

  export let style: ButtonStyles = 'plain';
  export let shape: ButtonShapes = 'plain';
  export let styleAppend: string | undefined = undefined;

  const makeButtonStyleClasses = () => {
    const styles = {
      [PLAIN]: 'bg-bg-secondary border-accent-primary',
      [ACTION]: 'bg-action-primary border-action-primary',
      [WARNING]: 'bg-warning-primary border-warning-primary',
      [DANGER]: 'bg-danger-primary border-danger-primary'
    };
    return styles[style];
  };

  const makeButtonShapeClasses = () => {
    if (shape === PLAIN) {
      return 'rounded-sm p-1 h-min';
    }
    if (shape === CIRCLE) {
      return 'rounded-[100%] min-w-[20px] w-min p-1.5 max-w-[60px] aspect-square';
    }
  };
</script>

<button
  on:click={onClick}
  data-testid={testid}
  class={`active:brightness-90 border border-solid ${makeButtonShapeClasses()} ${makeButtonStyleClasses()} ${styleAppend}`}
  {type}
>
  <slot />
</button>
