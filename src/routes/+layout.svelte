<script lang="ts">
  import '../app.css';

  import { userStore } from '$lib/stores/user-store';

  import Header from '$lib/components/header/header.svelte';

  export let data;

  $: {
    if (data?.user?.username) {
      console.log('setting user store!');
      userStore.set(data.user);
    }
  }
</script>

<div class="m-3">
  <Header />
  <slot />
</div>
