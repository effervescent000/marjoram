<script lang="ts">
  import { createForm } from 'felte';
  import { invalidateAll } from '$app/navigation';

  import { selectedLanguage } from '$lib/stores/language-store';

  import type { DescriptivePhone, Phone } from '$lib/types/phonology-types';

  import {
    PLACE,
    MANNER,
    CONSONANTS,
    FRONTNESS,
    HEIGHT,
    vowelLookup,
    consonantLookup,
    VOWELS
  } from '$lib/constants/phonology-constants';

  import { POST } from '$lib/utils/api-service';

  import PhoneCard from './phone-card.svelte';
  import Button from '../common/button.svelte';
  import PhonologyTable from './phonology-table.svelte';
  import LilPadder from '../common/lil-padder.svelte';

  // props
  export let token: string | undefined = undefined;
  export let phonesInUse: Phone[];

  // STATE
  let consonantMode = true;
  let expanded = phonesInUse.length < 5 ? true : false;

  $: selectedPhones = $data.phones;

  // LOGIC
  const compiledPhones = { ...consonantLookup, ...vowelLookup };

  const { form, data, addField, unsetField } = createForm({
    initialValues: {
      phones: [] as string[]
    },
    onSubmit: async (values) => {
      await POST('/phonology', {
        token,
        body: [
          {
            phonology: values.phones.map((phone) => ({
              base_phone: phone,
              language_id: $selectedLanguage,
              vowel: compiledPhones[phone].vocalic
            })),
            mode: 'insert'
          }
        ]
      });
    },
    onSuccess: async (_response, { reset }) => {
      await invalidateAll();
      reset();
    }
  });

  const removeCallback = (index: number) => unsetField(`phones.${index}`);
  const addCallback = (phone: string) => addField('phones', phone);
</script>

<div>
  <Button onClick={() => (expanded = !expanded)}>
    {#if expanded}
      Done adding
    {:else}
      Add new phones
    {/if}
  </Button>
  {#if expanded}
    <Button onClick={() => (consonantMode = !consonantMode)}>
      {#if consonantMode}
        Swap to vowels
      {:else}
        Swap to consonants
      {/if}
    </Button>
  {/if}
</div>

<LilPadder size="xs" />
<form
  use:form
  class={`transition-height duration-1000 ease-in-out overflow-hidden ${
    !expanded ? 'max-h-[0px]' : 'max-h-[1000px]'
  }`}
>
  <div class="flex gap-10 items-start">
    {#if consonantMode}
      <PhonologyTable
        {addCallback}
        {removeCallback}
        columnHeaders={[...PLACE]}
        rowHeaders={[...MANNER]}
        allPhones={CONSONANTS}
        renderMode="select"
        {phonesInUse}
        {selectedPhones}
        {consonantMode}
      />
    {:else}
      <PhonologyTable
        {phonesInUse}
        {selectedPhones}
        {addCallback}
        {removeCallback}
        columnHeaders={[...FRONTNESS]}
        rowHeaders={[...HEIGHT]}
        renderMode="select"
        allPhones={VOWELS}
        {consonantMode}
      />
    {/if}

    <div class="flex flex-wrap gap-5 py-10">
      {#each selectedPhones as phone, i}
        <PhoneCard base_phone={phone} index={i} removeCallback={() => removeCallback(i)} />
      {/each}
    </div>
  </div>
  <Button style="action" type="submit">Save New</Button>
  <LilPadder size="m" />
</form>
