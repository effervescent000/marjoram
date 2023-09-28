<script lang="ts">
  import { createForm } from 'felte';

  import type { DescriptivePhone } from '$lib/types/phonology-types';

  import PhoneCell from './phone-cell.svelte';
  import TextInput from '../common/text-input.svelte';
  import PhoneCard from './phone-card.svelte';

  export let token: string | undefined = undefined;
  export let consonants: DescriptivePhone[];

  const { form, data, addField, unsetField } = createForm({
    initialValues: {
      phones: [] as string[]
    }
  });

  $: selectedPhones = $data.phones;
  $: selectedPhonesLookup = selectedPhones.reduce(
    (acc, cur, i) => ({ ...acc, [cur]: i }),
    {} as Record<string, number>
  );

  $: {
    console.log(selectedPhonesLookup);
  }

  const removeCallback = (index: number) => unsetField(`phones.${index}`);
</script>

<form use:form class="flex gap-10">
  <div>
    <table>
      <tbody>
        <tr>
          {#each consonants as { base_phone }}
            <PhoneCell
              {base_phone}
              already_used={false}
              addCallback={() => addField('phones', base_phone)}
              {selectedPhonesLookup}
              removeCallback={() => {}}
            />
          {/each}
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    {#each selectedPhones as phone, i}
      <PhoneCard base_phone={phone} index={i} removeCallback={() => removeCallback(i)} />
    {/each}
  </div>
</form>
