<script lang="ts">
  import type { InputStyles, Sizes } from '$lib/types/common-types';

  // PROPS
  export let name: string;
  export let initialValue: string = '';
  export let label: string = '';

  export let resizable = false;
  export let style: InputStyles = 'plain';
  export let height: Sizes = 'm';
  export let width: Sizes = 'm';

  // STATE
  let value: string = initialValue;
  let styles: string = '';

  $: {
    const styleArray = [];

    styleArray.push(styleLookup[style], heightLookup[height], widthLookup[width]);
    if (!resizable) styleArray.push('resize-none');

    styles = styleArray.join(' ');
  }

  // LOGIC
  const styleLookup: Record<InputStyles, string> = {
    plain: 'border-accent-primary border-solid border rounded-sm p-1',
    secret: ''
  };

  const heightLookup: Record<Sizes, string> = {
    xs: 'h-12',
    s: 'h-20',
    m: 'h-32',
    l: 'h-48',
    xl: 'h-72'
  };

  const widthLookup: Record<Sizes, string> = {
    xs: 'w-24',
    s: 'w-36',
    m: 'w-48',
    l: 'w-64',
    xl: 'w-96'
  };
</script>

<label class="flex flex-col">
  {#if label}
    <span>{label}</span>
  {/if}
  <textarea {name} bind:value class={styles} />
</label>
