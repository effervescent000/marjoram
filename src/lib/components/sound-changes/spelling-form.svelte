<script lang="ts">
  import { createForm } from 'felte';

  import type { SoundChangeRules } from '$lib/types/sc-types';

  import { selectedLanguage } from '$lib/stores/language-store';

  import { POST } from '$lib/utils/api-service';
  import { appendRuleHeader } from '$lib/utils/sound-change-utils';

  import TextArea from '$lib/components/common/text-area.svelte';
  import HiddenInput from '../common/hidden-input.svelte';
  import Button from '../common/button.svelte';
  import LilPadder from '../common/lil-padder.svelte';

  // PROPS
  export let token: string | undefined;
  export let spellingRules: SoundChangeRules;

  // LOGIC
  const { form, data: formData } = createForm({
    onSubmit: async (values) => {
      const fixedValues = { ...values, content: appendRuleHeader(values.content) };
      await POST('/sc', { token, body: [fixedValues] });
    },
    initialValues: spellingRules
  });
</script>

<Button>Prefill from phonology</Button>
<LilPadder size="xs" />
<form use:form>
  <TextArea name="content" height="xl" />
  <HiddenInput name="role" value="spelling" />
  <HiddenInput name="language_id" value={$selectedLanguage} />
  <LilPadder size="xs" />
  <Button style="action" type="submit">Save</Button>
</form>
