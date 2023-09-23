<script lang="ts">
  import TextInput from '$lib/components/common/text-input.svelte';

  let signUp = false;
</script>

<form class="flex flex-col" method="post" action={`?/${signUp ? 'signUp' : 'login'}`}>
  <TextInput label="Username" name="username" />
  <TextInput label="Password" name="password" isPassword />
  {#if signUp}
    <TextInput label="Verify Password" name="verify" isPassword />
  {/if}
</form>
