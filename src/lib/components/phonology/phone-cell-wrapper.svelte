<script lang="ts">
  import type { ComposedPhoneData, DescriptivePhone, Phone } from '$lib/types/phonology-types';

  import PhoneCell from './phone-cell.svelte';

  export let x: string;
  export let y: string;
  export let consonantMode: boolean;

  export let phonesInUseLookup: Record<string, Phone>;
  export let selectedPhonesLookup: Record<string, number>;
  export let addCallback: (phone: string) => void;
  export let removeCallback: (index: number) => void;
  export let phones: (ComposedPhoneData | DescriptivePhone)[];

  let matches: (ComposedPhoneData | DescriptivePhone | undefined)[] = phones.filter(
    ({ place, manner, height, frontness }) =>
      consonantMode ? place === x && manner === y : height === y && frontness === x
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
