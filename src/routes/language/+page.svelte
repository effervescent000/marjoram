<script lang="ts">
  import { languageStore, selectedLanguage } from '$lib/stores/language-store';

  $: language = $languageStore.find(({ id }) => id === $selectedLanguage);
</script>

{#if !language}
  <span>Please select a language first.</span>
{:else}
  <div class="text-2xl">
    {language.name}
  </div>
  <span>
    {language.description}
  </span>
{/if}
