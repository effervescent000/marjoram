<script lang="ts">
  import { languageStore, selectedLanguage } from '$lib/stores/language-store';
  import { wordFiltersStore } from '$lib/stores/word-stores.js';

  import { Heading } from '$lib';
  import DictionaryWrapper from '$lib/components/dictionary/dictionary-wrapper.svelte';
  import DictionaryControls from '$lib/components/dictionary/dictionary-controls.svelte';
  import LilPadder from '$lib/components/common/lil-padder.svelte';

  export let data;

  $: language = $languageStore.find(({ id }) => $selectedLanguage === id);
  $: filteredWords = data.words.filter(({ word, word_links }) => {
    if ($wordFiltersStore.definition) {
      if (
        !word_links.some(({ definition }) =>
          definition.includes($wordFiltersStore.definition as string)
        )
      ) {
        return false;
      }
    }
    return true;
  });
</script>

{#if !language}
  <span>Invalid language!</span>
{:else}
  <Heading>
    <span>{language.name} dictionary</span>
  </Heading>
  <DictionaryControls />
  <LilPadder size="s" />
  <DictionaryWrapper words={filteredWords} />
{/if}
