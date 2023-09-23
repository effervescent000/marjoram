<script lang="ts">
  import { PLAIN } from '$lib/constants/styling-constants';
  import type { ButtonStyles } from '$lib/types/common-types';

  export let style: ButtonStyles = 'plain';

  const makeButtonClasses = () => {
    if (style === PLAIN) {
      return '';
    }
  };
</script>

<button class={` ${makeButtonClasses()}`}>
  <slot />
</button>
