<script lang="ts">
  import type { DescriptivePhone, Phone } from '$lib/types/phonology-types';

  import PhoneCell from './phone-cell.svelte';

  export let place: string;
  export let manner: string;

  export let phonesInUseLookup: Record<string, Phone>;
  export let selectedPhonesLookup: Record<string, number>;
  export let addCallback: (phone: string) => void;
  export let removeCallback: (index: number) => void;
  export let phones: DescriptivePhone[];

  let matches: (DescriptivePhone | undefined)[] = phones.filter(
    ({ place: thisPlace, manner: thisManner }) => thisPlace === place && thisManner === manner
  );

  $: {
    while (matches.length < 2) {
      matches = [...matches, undefined];
    }
  }
</script>

{#if matches}
  {#each matches as match}
    {#if match}
      <PhoneCell
        base_phone={match.base_phone}
        already_used={!!phonesInUseLookup[match.base_phone]}
        {selectedPhonesLookup}
        {addCallback}
        {removeCallback}
      />
    {:else}
      <td />
    {/if}
  {/each}
{/if}
