<script lang="ts">
  import type { WordLink } from '$lib/types/words-types';

  export let link: WordLink;
</script>

<span>{link.definition}</span>
<span>
  {#if link.hint}
    ({link.hint})
  {/if}
</span>
<span>{link.part_of_speech}</span>
