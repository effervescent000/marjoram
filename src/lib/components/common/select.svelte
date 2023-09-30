<script lang="ts">
  import type { InputStyles } from '$lib/types/common-types';

  export let name: string;
  export let label = '';
  export let options: Record<string, string | number>[];
  export let onChange: (() => void) | undefined = undefined;
  export let initialValue: string | number | undefined | null = undefined;
  export let required = false;
  export let disabled = false;
  export let testid: string | undefined = undefined;

  export let vertical = false;
  export let style: InputStyles = 'plain';

  let styles = '';
  let value = initialValue;

  $: {
    const styleArray = ['rounded-sm'];
    if (style !== 'secret') {
      styleArray.push('bg-bg-secondary p-0.5');
    } else {
      styleArray.push('bg-transparent appearance-none');
    }

    styles = styleArray.join(' ');
  }
</script>

<label class={vertical ? 'flex flex-col w-min' : 'flex justify-between'}>
  {#if label}
    <span>{label}</span>
  {/if}
  <select
    data-testid={testid}
    {disabled}
    {name}
    bind:value
    class={styles}
    on:change={onChange}
    {required}
  >
    <option value={undefined}>--</option>
    {#each options as opt}
      <option value={opt.value}>{opt.label}</option>
    {/each}
  </select>
</label>
