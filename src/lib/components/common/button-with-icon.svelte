<script lang="ts">
  import Fa from 'svelte-fa/src/fa.svelte';
  import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

  import Button from './button.svelte';
  import type { ButtonShapes, ButtonStyles } from '$lib/types/common-types';
  import { PLAIN } from '$lib/constants/styling-constants';

  export let icon: IconDefinition;
  export let style: ButtonStyles = PLAIN;
  export let shape: ButtonShapes = PLAIN;
  export let onClick: (() => void) | undefined = undefined;
</script>

<Button {onClick} {style} {shape}>
  <div class="flex w-full justify-center text-xs">
    <Fa {icon} class={shape === PLAIN && 'aspect-square w-4'} />
  </div>
</Button>
