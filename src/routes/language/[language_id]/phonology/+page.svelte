<script lang="ts">
  import { languageStore, selectedLanguage } from '$lib/stores/language-store';

  import { Heading } from '$lib';
  import PhonologyList from '$lib/components/phonology/phonology-list.svelte';

  export let data;

  $: language = $languageStore.find(({ id }) => $selectedLanguage === id);
</script>

{#if !language}
  <span>Please choose a language first.</span>
{:else}
  <Heading>
    <span>{language.name} Phonology</span>
  </Heading>
  <PhonologyList phones={data.phonology} token={data.token} />
{/if}
