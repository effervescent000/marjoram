<script lang="ts">
  import type { InputStyles, Sizes } from '$lib/types/common-types';
  import type { FormEventHandler } from 'svelte/elements';

  export let name: string;
  export let label = '';
  export let initialValue: string | undefined | null = undefined;
  export let required = false;
  export let disabled = false;
  export let onInput: ((event: { target: { value: string } }) => void) | undefined = undefined;
  export let testid: string | undefined = undefined;

  export let vertical = false;
  export let style: InputStyles = 'plain';
  export let size: Sizes = 'm';
  export let styleAppend: string = '';

  let value = initialValue;
  let styles = '';

  $: {
    const styleArray = ['rounded-sm'];

    if (style !== 'secret') {
      styleArray.push('border-accent-primary border border-solid disabled:brightness-75');
    } else {
      styleArray.push('bg-transparent');
    }

    const widthsPerSize: Record<Sizes, string> = {
      xs: 'w-8',
      s: 'w-20',
      m: '',
      l: '',
      xl: ''
    };

    styleArray.push(widthsPerSize[size]);

    styleArray.push(styleAppend);

    styles = styleArray.join(' ');
  }
</script>

<label class={vertical ? 'flex flex-col w-min' : 'flex gap-2 justify-between'}>
  {#if label}
    <span>{label}</span>
  {/if}
  <input
    data-testid={testid}
    on:input={onInput}
    {disabled}
    class={styles}
    type="text"
    {name}
    bind:value
    {required}
  />
</label>
