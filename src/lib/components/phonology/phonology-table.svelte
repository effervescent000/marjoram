<script lang="ts">
  import type { ComposedPhoneData, DescriptivePhone, Phone } from '$lib/types/phonology-types';

  import { consonantLookup } from '$lib/constants/phonology-constants';

  import PhoneCellWrapper from './phone-cell-wrapper.svelte';
  import PhonologyTableHeader from './phonology-table-header.svelte';

  // PROPS
  export let renderMode: 'select' | 'display' = 'select';
  export let consonantMode: boolean;
  export let columnHeaders: string[];
  export let rowHeaders: string[];

  export let addCallback: (phone: string) => void;
  export let removeCallback: (index: number) => void;
  export let allPhones: DescriptivePhone[];
  export let phonesInUse: Phone[];
  export let selectedPhones: string[];

  // STATE
  let filteredColumnHeaders = [...columnHeaders];
  let filteredRowHeaders = [...rowHeaders];

  let composedPhones: ComposedPhoneData[] = [];

  $: selectedPhonesLookup = selectedPhones.reduce(
    (acc, cur, i) => ({ ...acc, [cur]: i }),
    {} as Record<string, number>
  );

  $: phonesInUseLookup = phonesInUse.reduce(
    (acc, cur) => ({ ...acc, [cur.base_phone]: cur }),
    {} as Record<string, Phone>
  );

  $: {
    composedPhones = phonesInUse.map((phone) => ({
      ...phone,
      ...consonantLookup[phone.base_phone]
    }));
  }

  $: {
    filteredColumnHeaders = columnHeaders.filter((header) => {
      const result = (renderMode === 'select' ? allPhones : composedPhones).filter(
        ({ place, frontness }) => (!consonantMode ? frontness === header : place === header)
      );
      return result.length > 0;
    });
  }

  $: {
    filteredRowHeaders = rowHeaders.filter((header) => {
      const result = (renderMode === 'select' ? allPhones : composedPhones).filter(
        ({ manner, height }) => (!consonantMode ? height === header : manner === header)
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
        {#each filteredColumnHeaders as x}
          <PhoneCellWrapper
            y={header}
            {x}
            {addCallback}
            {removeCallback}
            {phonesInUseLookup}
            {selectedPhonesLookup}
            phones={renderMode === 'select' ? allPhones : composedPhones}
            {consonantMode}
          />
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
