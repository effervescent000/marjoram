<script lang="ts">
  import { faPencil, faX } from '@fortawesome/free-solid-svg-icons';

  import { goto } from '$app/navigation';

  import type { Word } from '$lib/types/words-types';

  import { editTargetWord } from '$lib/stores/word-stores';

  import { ButtonWithIcon } from '$lib';
  import { selectedLanguage } from '$lib/stores/language-store';

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
  <ButtonWithIcon
    onClick={() => {
      editTargetWord.set(word);
      goto(`/language/${$selectedLanguage}/dictionary/edit`);
    }}
    icon={faPencil}
  />
  <ButtonWithIcon icon={faX} />
</div>
