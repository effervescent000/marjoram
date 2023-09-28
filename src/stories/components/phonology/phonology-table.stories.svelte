<script context="module">
  import PhonologyTable from '$lib/components/phonology/phonology-table.svelte';
  import { CONSONANTS, MANNER, PLACE } from '$lib/constants/phonology-constants';

  export const meta = {
    title: 'Phonology Table',
    component: PhonologyTable
  };
</script>

<script lang="ts">
  import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <PhonologyTable addCallback={() => {}} removeCallback={() => {}} {...args} />
</Template>

<Story
  name="Full table"
  args={{
    columnHeaders: PLACE,
    rowHeaders: MANNER,
    phones: CONSONANTS,
    selectedPhonesLookup: {},
    phonesInUseLookup: {}
  }}
/>
