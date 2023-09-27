<script lang="ts">
  import { Heading } from '$lib';
  import { languageStore, selectedLanguage } from '$lib/stores/language-store';

  $: language = $languageStore.find(({ id }) => $selectedLanguage === id);
</script>

{#if !language}
  <span>Please choose a language first.</span>
{:else}
  <Heading>
    <span>{language.name} Phonology</span>
  </Heading>
{/if}
