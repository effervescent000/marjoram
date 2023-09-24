<script lang="ts">
  import { ACTION, CIRCLE, PLAIN } from '$lib/constants/styling-constants';
  import type { ButtonShapes, ButtonStyles } from '$lib/types/common-types';

  export let style: ButtonStyles = 'plain';
  export let shape: ButtonShapes = 'plain';
  export let onClick: (() => void) | undefined = undefined;
  export let type: 'submit' | 'button' | 'reset' = 'button';

  const makeButtonStyleClasses = () => {
    if (style === PLAIN) {
      return 'bg-bg-secondary border-accent-primary border border-solid';
    }
    if (style === ACTION) {
      return 'bg-action-primary';
    }
  };

  const makeButtonShapeClasses = () => {
    if (shape === PLAIN) {
      return 'rounded-sm p-1';
    }
    if (shape === CIRCLE) {
      return 'rounded-[100%] min-w-[20px] w-min p-2 max-w-[60px] aspect-square';
    }
  };
</script>

<button
  on:click={onClick}
  class={`active:brightness-90 ${makeButtonShapeClasses()} ${makeButtonStyleClasses()}`}
  {type}
>
  <slot />
</button>
