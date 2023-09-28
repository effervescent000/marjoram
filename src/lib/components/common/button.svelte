<script lang="ts">
  import type { ButtonShapes, ButtonStyles } from '$lib/types/common-types';

  import { ACTION, CIRCLE, PLAIN, WARNING, DANGER } from '$lib/constants/styling-constants';

  export let onClick: (() => void) | undefined = undefined;
  export let type: 'submit' | 'button' | 'reset' = 'button';

  export let style: ButtonStyles = 'plain';
  export let shape: ButtonShapes = 'plain';
  export let styleAppend: string | undefined = undefined;

  const makeButtonStyleClasses = () => {
    const styles = {
      [PLAIN]: 'bg-bg-secondary border-accent-primary border border-solid',
      [ACTION]: 'bg-action-primary',
      [WARNING]: 'bg-warning-primary',
      [DANGER]: 'bg-danger-primary'
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
  class={`active:brightness-90 ${makeButtonShapeClasses()} ${makeButtonStyleClasses()} ${styleAppend}`}
  {type}
>
  <slot />
</button>
