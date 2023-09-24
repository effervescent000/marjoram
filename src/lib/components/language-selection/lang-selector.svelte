<script lang="ts">
  import { languageStore } from '$lib/stores/language-store';
  import Select from '../common/select.svelte';

  $: options = $languageStore.map((lang) => ({ label: lang.name, value: lang.id }));
</script>

<Select {options} />
