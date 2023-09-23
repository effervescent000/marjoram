<script lang="ts">
  import { enhance } from '$app/forms';

  import TextInput from '$lib/components/common/text-input.svelte';
  import Button from '../common/button.svelte';

  let signUp = false;
</script>

<form class="flex flex-col" method="post" action={`?/${signUp ? 'signUp' : 'login'}`} use:enhance>
  <TextInput label="Username" name="username" />
  <TextInput label="Password" name="password" isPassword />
  {#if signUp}
    <TextInput label="Verify Password" name="verify" isPassword />
  {/if}
  <Button>{signUp ? 'Sign up' : 'Login'}</Button>
</form>
