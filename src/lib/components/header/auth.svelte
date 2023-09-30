<script lang="ts">
  import { enhance } from '$app/forms';

  import { userStore } from '$lib/stores/user-store';

  import TextInput from '$lib/components/common/text-input.svelte';
  import Button from '../common/button.svelte';
  import PasswordInput from '../common/password-input.svelte';

  let signUp = false;
</script>

{#if !$userStore}
  <form class="flex flex-col" method="post" action={`?/${signUp ? 'signUp' : 'login'}`} use:enhance>
    <TextInput label="Username" name="username" testid="auth-username" />
    <PasswordInput testid="auth-password" label="Password" name="password" />
    {#if signUp}
      <PasswordInput testid="auth-confirm" label="Verify Password" name="verify" />
    {/if}
    <Button testid="auth-submit" type="submit">{signUp ? 'Sign up' : 'Login'}</Button>
  </form>
{:else}
  <span>Hello, {$userStore.username}!</span>
{/if}
