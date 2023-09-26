<script lang="ts">
  import { faPencil, faX } from '@fortawesome/free-solid-svg-icons';

  import type { WordLink } from '$lib/types/words-types';

  import { ButtonWithIcon } from '$lib';

  export let link: WordLink;
  export let selectWordLink: (link: WordLink) => void;
</script>

<span>{link.definition}</span>
<span>
  {#if link.hint}
    ({link.hint})
  {/if}
</span>
<span>{link.part_of_speech}</span>
<div class="flex">
  <ButtonWithIcon icon={faPencil} onClick={() => selectWordLink(link)} />
  <ButtonWithIcon icon={faX} />
</div>
