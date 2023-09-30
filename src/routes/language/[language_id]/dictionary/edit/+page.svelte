<script lang="ts">
  import { editTargetWord } from '$lib/stores/word-stores.js';
  import { selectedLanguage } from '$lib/stores/language-store.js';

  import WordEdit from '$lib/components/dictionary/word-edit.svelte';
  import { Heading } from '$lib';

  export let data;
</script>

<Heading>
  <span>Add word</span>
</Heading>
<WordEdit globalWordLinks={data.wordLinks} language_id={$selectedLanguage} />
