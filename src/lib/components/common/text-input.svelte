<script lang="ts">
  import type { InputStyles, Sizes } from '$lib/types/common-types';
  import type { FormEventHandler } from 'svelte/elements';

  export let name: string;
  export let label = '';
  export let initialValue: string | undefined | null = undefined;
  export let required = false;
  export let disabled = false;
  export let onInput: FormEventHandler<HTMLInputElement> | undefined = undefined;

  export let vertical = false;
  export let style: InputStyles = 'plain';
  export let size: Sizes = 'm';

  let value = initialValue;

  const getStyles = () => {
    const styles = ['rounded-sm'];

    if (style !== 'secret') {
      styles.push('border-accent-primary border border-solid disabled:brightness-75');
    } else {
      styles.push('bg-transparent');
    }

    const widthsPerSize: Record<Sizes, string> = {
      xs: 'w-8',
      s: '',
      m: '',
      l: '',
      xl: ''
    };

    styles.push(widthsPerSize[size]);

    return styles.join(' ');
  };
</script>

<label class={vertical ? 'flex flex-col w-min' : 'flex gap-2 justify-between'}>
  {#if label}
    <span>{label}</span>
  {/if}
  <input
    on:input={onInput}
    {disabled}
    class={getStyles()}
    type="text"
    {name}
    bind:value
    {required}
  />
</label>
