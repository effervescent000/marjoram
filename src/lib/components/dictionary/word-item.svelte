<script lang="ts">
  import { faPencil, faX } from '@fortawesome/free-solid-svg-icons';

  import type { Word } from '$lib/types/words-types';

  import { ButtonWithIcon } from '$lib';

  export let word: Word;

  $: definition = word.word_links
    .map(({ definition, hint }) => `${definition}${hint ? ` (${hint})` : ''}`)
    .join('; ');
</script>

<span>{word.word}</span>
<span>{definition}</span>
<span>{word.part_of_speech}</span>
<span>{word.notes}</span>
<div class="flex">
  <ButtonWithIcon icon={faPencil} />
  <ButtonWithIcon icon={faX} />
</div>
