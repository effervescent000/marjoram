<script lang="ts">
  import Fa from 'svelte-fa/src/fa.svelte';

  import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
  import type { ButtonShapes, ButtonStyles, Sizes } from '$lib/types/common-types';

  import { CIRCLE, PLAIN } from '$lib/constants/styling-constants';

  import Button from './button.svelte';

  export let icon: IconDefinition;
  export let onClick: (() => void) | undefined = undefined;
  export let type: 'submit' | 'button' | 'reset' = 'button';
  export let testid: string | undefined = undefined;

  export let style: ButtonStyles = PLAIN;
  export let shape: ButtonShapes = PLAIN;
  export let styleAppend: string | undefined = undefined;
  export let size: Sizes = 'm';

  let styles = '';

  const shapeLookup: Record<ButtonShapes, string> = {
    [PLAIN]: 'aspect-square',
    [CIRCLE]: ''
  };

  const sizeLookup: Record<Sizes, string> = {
    xs: 'w-2.5',
    s: '',
    m: 'w-4',
    l: '',
    xl: ''
  };

  $: {
    const styleArray = [];
    styleArray.push(shapeLookup[shape], sizeLookup[size]);
    styles = styleArray.join(' ');
  }
</script>

<Button {testid} {onClick} {style} {shape} {type} {styleAppend} {size}>
  <div class="flex w-full justify-center">
    <Fa {icon} class={styles} />
  </div>
</Button>
