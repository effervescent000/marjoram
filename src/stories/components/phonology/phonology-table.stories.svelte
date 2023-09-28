<script context="module">
  import PhonologyTable from '$lib/components/phonology/phonology-table.svelte';

  export const meta = {
    title: 'Phonology Table',
    component: PhonologyTable
  };
</script>

<script lang="ts">
  import { Story, Template } from '@storybook/addon-svelte-csf';
  import { CONSONANTS, MANNER, PLACE } from '$lib/constants/phonology-constants';

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
    selectedPhonesLookup: {},
    phonesInUseLookup: {},
    phonesInUse: []
  }}
/>

<Story
  name="Display mode (consonants)"
  args={{
    columnHeaders: PLACE,
    rowHeaders: MANNER,
    allPhones: CONSONANTS,
    selectedPhonesLookup: {},
    phonesInUseLookup: {},
    phonesInUse: makePhones(['k', 't', 'p', 'd']),
    mode: 'display'
  }}
/>
