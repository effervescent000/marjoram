<script lang="ts">
  import { Select } from '$lib';

  import { languageStore } from '$lib/stores/language-store';

  $: options = $languageStore
    ? $languageStore.map((lang) => ({ label: lang.name, value: lang.id }))
    : [];
</script>

<Select {options} />
