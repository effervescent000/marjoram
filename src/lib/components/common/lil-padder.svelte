<script lang="ts">
  import type { Sizes } from '$lib/types/common-types';

  export let size: Sizes;

  const sizeLookup: Record<Sizes, string> = {
    xs: 'h-4',
    s: 'h-8',
    m: 'h-12',
    l: 'h-16',
    xl: 'h-20'
  };
</script>

<div class={sizeLookup[size]} />
