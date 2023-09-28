<script lang="ts">
  import type { DescriptivePhone, Phone } from '$lib/types/phonology-types';
  import PhoneCellWrapper from './phone-cell-wrapper.svelte';
  import PhonologyTableHeader from './phonology-table-header.svelte';

  // PROPS
  export let mode: 'select' | 'display' = 'select';
  export let columnHeaders: string[];
  export let rowHeaders: string[];

  export let phonesInUseLookup: Record<string, Phone>;
  export let selectedPhonesLookup: Record<string, number>;
  export let addCallback: (phone: string) => void;
  export let removeCallback: (index: number) => void;
  export let phones: DescriptivePhone[];

  let filteredColumnHeaders = [...columnHeaders];
  let filteredRowHeaders = [...rowHeaders];

  $: {
    filteredColumnHeaders = columnHeaders.filter((header) => {
      const result = phones.filter(({ place }) => place === header);
      return result.length > 0;
    });
  }

  $: {
    filteredRowHeaders = rowHeaders.filter((header) => {
      const result = phones.filter(({ manner }) => manner === header);
      return result.length > 0;
    });
  }
</script>

<table class="border-collapse">
  <thead>
    <tr>
      {#each ['', ...filteredColumnHeaders] as header}
        <PhonologyTableHeader label={header} />
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each filteredRowHeaders as header}
      <tr>
        <PhonologyTableHeader label={header} />
        {#each filteredColumnHeaders as place}
          <PhoneCellWrapper
            manner={header}
            {place}
            {addCallback}
            {removeCallback}
            {phonesInUseLookup}
            {selectedPhonesLookup}
            {phones}
          />
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
