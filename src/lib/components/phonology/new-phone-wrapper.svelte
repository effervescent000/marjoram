<script lang="ts">
  import { createForm } from 'felte';

  import { invalidate } from '$app/navigation';
  import { page } from '$app/stores';

  import type { ComposedPhoneData, DescriptivePhone, Phone } from '$lib/types/phonology-types';

  import { selectedLanguage } from '$lib/stores/language-store';

  import { PLACE, MANNER } from '$lib/constants/phonology-constants';

  import { POST } from '$lib/utils/api-service';

  import PhoneCard from './phone-card.svelte';
  import Button from '../common/button.svelte';
  import PhonologyTable from './phonology-table.svelte';

  // props
  export let token: string | undefined = undefined;
  export let consonants: DescriptivePhone[];
  export let phonesInUse: Phone[];

  // STATE
  let consonantMode = true;

  $: selectedPhones = $data.phones;
  $: selectedPhonesLookup = selectedPhones.reduce(
    (acc, cur, i) => ({ ...acc, [cur]: i }),
    {} as Record<string, number>
  );

  $: phonesInUseLookup = phonesInUse.reduce(
    (acc, cur) => ({ ...acc, [cur.base_phone]: cur }),
    {} as Record<string, Phone>
  );

  // LOGIC
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
    onSuccess: async (_response, { reset }) => {
      await invalidate($page.url.pathname);
      reset();
    }
  });

  const removeCallback = (index: number) => unsetField(`phones.${index}`);
  const addCallback = (phone: string) => addField('phones', phone);
</script>

<form use:form>
  <div class="flex gap-10">
    <div>
      <PhonologyTable
        {phonesInUseLookup}
        {selectedPhonesLookup}
        {addCallback}
        {removeCallback}
        columnHeaders={[...PLACE]}
        rowHeaders={[...MANNER]}
        allPhones={consonants}
        mode="select"
        {phonesInUse}
      />
    </div>
    <div class="flex flex-wrap gap-5">
      {#each selectedPhones as phone, i}
        <PhoneCard base_phone={phone} index={i} removeCallback={() => removeCallback(i)} />
      {/each}
    </div>
  </div>
  <Button style="action" type="submit">Save New</Button>
</form>
