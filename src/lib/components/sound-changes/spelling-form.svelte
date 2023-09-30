<script lang="ts">
  import { enhance } from '$app/forms';

  import type { SoundChangeRules } from '$lib/types/sc-types';

  import { selectedLanguage } from '$lib/stores/language-store';

  import TextArea from '$lib/components/common/text-area.svelte';
  import HiddenInput from '../common/hidden-input.svelte';
  import Button from '../common/button.svelte';
  import LilPadder from '../common/lil-padder.svelte';

  // PROPS
  export let spellingRules: SoundChangeRules;
</script>

<Button>Prefill from phonology</Button>
<LilPadder size="xs" />
<form method="post" action="?/upsert" use:enhance>
  <HiddenInput name="id" value={spellingRules.id} />
  <TextArea name="content" height="xl" initialValue={spellingRules.content} />
  <HiddenInput name="role" value="spelling" />
  <HiddenInput name="language_id" value={$selectedLanguage} />
  <LilPadder size="xs" />
  <Button style="action" type="submit">Save</Button>
</form>
