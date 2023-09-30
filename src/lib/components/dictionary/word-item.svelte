<script lang="ts">
  import { faPencil, faX } from '@fortawesome/free-solid-svg-icons';

  import { goto } from '$app/navigation';
  import { enhance } from '$app/forms';

  import type { Word } from '$lib/types/words-types';

  import { selectedLanguage } from '$lib/stores/language-store';

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
<div class="flex items-center">
  <ButtonWithIcon
    onClick={() => {
      goto(`/language/${$selectedLanguage}/dictionary/edit/${word.id}`);
    }}
    icon={faPencil}
  />
  <form method="post" action="?/deleteWord" use:enhance>
    <input type="hidden" name="id" value={word.id} />
    <ButtonWithIcon testid={`${word.word}-delete-btn`} icon={faX} style="danger" type="submit" />
  </form>
</div>
