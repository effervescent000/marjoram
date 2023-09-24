<script lang="ts">
  import '../app.css';

  import { userStore } from '$lib/stores/user-store';
  import { languageStore, selectedLanguage } from '$lib/stores/language-store';

  import Header from '$lib/components/header/header.svelte';

  export let data;

  $: {
    if (data?.user?.username) {
      userStore.set(data.user);
    }
  }

  $: {
    if (data?.languages) {
      if (!$selectedLanguage) {
        selectedLanguage.set(data.languages[0].id);
      }
      languageStore.set(data.languages);
    }
  }
</script>

<div class="m-3">
  <Header />
  <slot />
</div>
