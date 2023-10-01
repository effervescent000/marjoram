<script lang="ts">
  import { page } from '$app/stores';

  import { selectedLanguage } from '$lib/stores/language-store.js';

  import WordEdit from '$lib/components/dictionary/word-edit.svelte';
  import { Heading } from '$lib';

  export let data;
</script>

<Heading>
  <span>Edit word</span>
</Heading>
<WordEdit
  word={data.wordsById[$page.params.word_id]}
  globalWordLinks={data.wordLinks}
  language_id={$selectedLanguage}
  pronunciation={data.spelling?.output[0]}
  globalWordClasses={data.wordClasses}
/>
