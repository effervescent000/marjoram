<script lang="ts">
  import type { WordClass } from '$lib/types/grammar-types';
  import { faX } from '@fortawesome/free-solid-svg-icons';
  import ButtonWithIcon from '../common/button-with-icon.svelte';

  export let id: number;
  export let removeCallback: (id: number) => void;
  export let globalWordClasses: WordClass[];

  const wordClass = globalWordClasses.find(({ id: idToCheck }) => idToCheck === id);
</script>

{#if wordClass}
  <li
    class="flex gap-1 items-center bg-accent-primary border-accent-secondary border border-solid w-min p-0.5"
  >
    <span>{wordClass.abbreviation}</span>
    <ButtonWithIcon size="xs" style="danger" icon={faX} onClick={() => removeCallback(id)} />
  </li>
{/if}
