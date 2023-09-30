<script lang="ts">
  import { enhance } from '$app/forms';

  import { languageStore } from '$lib/stores/language-store';

  import { Select } from '$lib';

  let form: HTMLFormElement;

  $: options = $languageStore
    ? $languageStore.map((lang) => ({ label: lang.name, value: lang.id }))
    : [];
</script>

<form method="post" action="?/selectLanguage" bind:this={form} use:enhance>
  <Select testid="lang-selector" name="language" {options} onChange={() => form.requestSubmit()} />
</form>
