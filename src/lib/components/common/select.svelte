<script lang="ts">
  import type { InputStyles } from '$lib/types/common-types';

  export let name: string;
  export let label = '';
  export let options: Record<string, string | number>[];
  export let onChange: (() => void) | undefined = undefined;
  export let initialValue: string | number | undefined | null = undefined;
  export let required = false;
  export let disabled = false;

  export let vertical = false;
  export let style: InputStyles = 'plain';

  let value = initialValue;

  const getStyles = () => {
    const styles = ['rounded-sm'];
    if (style !== 'secret') {
      styles.push('bg-bg-secondary p-0.5 min-w-[11rem]');
    } else {
      styles.push('bg-transparent appearance-none');
    }

    return styles.join(' ');
  };
</script>

<label class={vertical ? 'flex flex-col w-min' : 'flex justify-between'}>
  {#if label}
    <span>{label}</span>
  {/if}
  <select {disabled} {name} bind:value class={getStyles()} on:change={onChange} {required}>
    {#each options as opt}
      <option value={opt.value}>{opt.label}</option>
    {/each}
  </select>
</label>
