<script lang="ts">
  import { languageStore, selectedLanguage } from '$lib/stores/language-store';

  import { CONSONANTS } from '$lib/constants/phonology-constants.js';

  import { Heading } from '$lib';
  import PhonologyList from '$lib/components/phonology/phonology-list.svelte';
  import NewPhoneWrapper from '$lib/components/phonology/new-phone-wrapper.svelte';

  export let data;

  $: language = $languageStore.find(({ id }) => $selectedLanguage === id);
</script>

{#if !language}
  <span>Please choose a language first.</span>
{:else}
  <Heading>
    <span>{language.name} Phonology</span>
  </Heading>
  <div>
    <NewPhoneWrapper token={data.token} phonesInUse={data.phonology} />
    <PhonologyList phones={data.phonology} token={data.token} />
  </div>
{/if}
