<script lang="ts">
  import { TableHeader } from '$lib';
  import type { Word } from '$lib/types/words-types';
  import WordItem from './word-item.svelte';

  export let words: Word[];

  const headers = ['Word', 'Definition', 'Part of Speech', 'Notes', ''];
</script>

<div class="grid grid-cols-5" data-testid="dictionary-results">
  <TableHeader {headers} />
  {#each words as word}
    <WordItem {word} />
  {/each}
</div>
