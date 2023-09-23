<script lang="ts">
  import { PLAIN } from '$lib/constants/styling-constants';
  import type { ButtonStyles } from '$lib/types/common-types';

  export let style: ButtonStyles = 'plain';

  const makeButtonClasses = () => {
    if (style === PLAIN) {
      return 'bg-bg-secondary border-accent-primary border border-solid rounded-sm';
    }
  };
</script>

<button class={`p-1 active:brightness-90 ${makeButtonClasses()}`}>
  <slot />
</button>
