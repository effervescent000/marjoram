<script lang="ts">
  import Fa from 'svelte-fa/src/fa.svelte';

  import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
  import type { ButtonShapes, ButtonStyles } from '$lib/types/common-types';

  import { PLAIN } from '$lib/constants/styling-constants';

  import Button from './button.svelte';

  export let icon: IconDefinition;
  export let onClick: (() => void) | undefined = undefined;
  export let type: 'submit' | 'button' | 'reset' = 'button';
  export let testid: string | undefined = undefined;

  export let style: ButtonStyles = PLAIN;
  export let shape: ButtonShapes = PLAIN;
  export let styleAppend: string | undefined = undefined;
</script>

<Button {testid} {onClick} {style} {shape} {type} {styleAppend}>
  <div class="flex w-full justify-center text-xs">
    <Fa {icon} class={shape === PLAIN && 'aspect-square w-4'} />
  </div>
</Button>
