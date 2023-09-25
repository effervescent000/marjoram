<script lang="ts">
  import type { WordLink } from '$lib/types/words-types';
  import TableHeader from '../common/table-header.svelte';
  import WordLinkItem from './word-link-item.svelte';

  export let links: WordLink[];

  const headers = ['Definition', 'Hint', 'Part of Speech'];
</script>

<div class="grid grid-cols-3">
  <TableHeader {headers} />
  {#each links as link}
    <WordLinkItem {link} />
  {/each}
</div>
