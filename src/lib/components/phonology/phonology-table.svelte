<script lang="ts">
  import type { ComposedPhoneData, DescriptivePhone, Phone } from '$lib/types/phonology-types';

  import { consonantLookup } from '$lib/constants/phonology-constants';

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
  export let allPhones: DescriptivePhone[];
  export let phonesInUse: Phone[];

  let filteredColumnHeaders = [...columnHeaders];
  let filteredRowHeaders = [...rowHeaders];

  let composedPhones: ComposedPhoneData[] = [];

  $: {
    composedPhones = phonesInUse.map((phone) => ({
      ...phone,
      ...consonantLookup[phone.base_phone]
    }));
  }

  $: {
    filteredColumnHeaders = columnHeaders.filter((header) => {
      const result = (mode === 'select' ? allPhones : composedPhones).filter(
        ({ place }) => place === header
      );
      return result.length > 0;
    });
  }

  $: {
    filteredRowHeaders = rowHeaders.filter((header) => {
      const result = (mode === 'select' ? allPhones : composedPhones).filter(
        ({ manner }) => manner === header
      );
      return result.length > 0;
    });
  }
</script>

<table class="border-collapse w-min">
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
        <PhonologyTableHeader compress={false} label={header} />
        {#each filteredColumnHeaders as place}
          <PhoneCellWrapper
            manner={header}
            {place}
            {addCallback}
            {removeCallback}
            {phonesInUseLookup}
            {selectedPhonesLookup}
            phones={mode === 'select' ? allPhones : composedPhones}
          />
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
