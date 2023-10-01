<script lang="ts">
  import { selectedLanguage } from '$lib/stores/language-store.js';

  import WordEdit from '$lib/components/dictionary/word-edit.svelte';
  import { Heading } from '$lib';

  export let data;
</script>

<Heading>
  <span>Add word</span>
</Heading>
<WordEdit
  globalWordLinks={data.wordLinks}
  language_id={$selectedLanguage}
  globalWordClasses={data.wordClasses}
/>
