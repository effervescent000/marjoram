<script lang="ts">
  import TextInput from '$lib/components/common/text-input.svelte';
</script>

<form method="post" class="flex flex-col w-min gap-2">
  <TextInput name="name" required label="Name" />
  <TextInput name="description" label="Description" />
</form>
