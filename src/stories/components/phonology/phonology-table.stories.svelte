<script context="module">
  import PhonologyTable from '$lib/components/phonology/phonology-table.svelte';

  export const meta = {
    title: 'Phonology Table',
    component: PhonologyTable
  };
</script>

<script lang="ts">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import {
    CONSONANTS,
    FRONTNESS,
    HEIGHT,
    MANNER,
    PLACE,
    VOWELS
  } from '$lib/constants/phonology-constants';

  const makePhones = (phones: string[]) => phones.map((phone) => ({ base_phone: phone }));
</script>

<Template let:args>
  <PhonologyTable addCallback={() => {}} removeCallback={() => {}} {...args} />
</Template>

<Story
  name="Select mode (consonants)"
  args={{
    columnHeaders: PLACE,
    rowHeaders: MANNER,
    allPhones: CONSONANTS,
    phonesInUse: [],
    selectedPhones: []
  }}
/>

<Story
  name="Display mode (consonants)"
  args={{
    columnHeaders: PLACE,
    rowHeaders: MANNER,
    allPhones: CONSONANTS,
    selectedPhones: [],
    phonesInUse: makePhones(['k', 't', 'p', 'd']),
    mode: 'display'
  }}
/>

<Story
  name="Select mode (vowels)"
  args={{
    columnHeaders: FRONTNESS,
    rowHeaders: HEIGHT,
    allPhones: VOWELS,
    phonesInUse: [],
    selectedPhones: [],
    consonantMode: false
  }}
/>
