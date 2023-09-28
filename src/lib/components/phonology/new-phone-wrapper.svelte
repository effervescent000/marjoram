<script lang="ts">
  import { createForm } from 'felte';

  import type { DescriptivePhone } from '$lib/types/phonology-types';

  import { selectedLanguage } from '$lib/stores/language-store';

  import { POST } from '$lib/utils/api-service';

  import PhoneCell from './phone-cell.svelte';
  import PhoneCard from './phone-card.svelte';
  import { invalidateAll } from '$app/navigation';
  import Button from '../common/button.svelte';

  export let token: string | undefined = undefined;
  export let consonants: DescriptivePhone[];

  let consonantMode = true;

  const { form, data, addField, unsetField } = createForm({
    initialValues: {
      phones: [] as string[]
    },
    onSubmit: async (values) => {
      await POST('/phonology', {
        token,
        body: values.phones.map((phone) => ({
          base_phone: phone,
          language_id: $selectedLanguage,
          vowel: !consonantMode
        }))
      });
    },
    onSuccess: async (response, { reset }) => {
      await invalidateAll();
      reset();
    }
  });

  $: selectedPhones = $data.phones;
  $: selectedPhonesLookup = selectedPhones.reduce(
    (acc, cur, i) => ({ ...acc, [cur]: i }),
    {} as Record<string, number>
  );

  const removeCallback = (index: number) => unsetField(`phones.${index}`);
</script>

<form use:form>
  <div class="flex gap-10">
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
                {removeCallback}
              />
            {/each}
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex flex-wrap gap-5">
      {#each selectedPhones as phone, i}
        <PhoneCard base_phone={phone} index={i} removeCallback={() => removeCallback(i)} />
      {/each}
    </div>
  </div>
  <Button style="action" type="submit">Save New</Button>
</form>
