<script lang="ts">
  import { languageStore, selectedLanguage } from '$lib/stores/language-store';

  import { Heading } from '$lib';
  import DictionaryWrapper from '$lib/components/dictionary/dictionary-wrapper.svelte';

  export let data;

  $: language = $languageStore.find(({ id }) => $selectedLanguage === id);
</script>

{#if !language}
  <span>Invalid language!</span>
{:else}
  <Heading>
    <span>{language.name} dictionary</span>
  </Heading>
  <DictionaryWrapper words={data.words} />
{/if}
