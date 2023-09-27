<script lang="ts">
  import { editTargetWord } from '$lib/stores/word-stores.js';

  import WordEdit from '$lib/components/dictionary/word-edit.svelte';
  import { Heading } from '$lib';
  import { selectedLanguage } from '$lib/stores/language-store.js';

  export let data;
</script>

<Heading>
  <span>{$editTargetWord ? 'Edit' : 'Add'} word</span>
</Heading>
<WordEdit word={$editTargetWord} globalWordLinks={data.wordLinks} language_id={$selectedLanguage} />
