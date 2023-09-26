<script lang="ts">
  import Button from '$lib/components/common/button.svelte';
  import TextInput from '$lib/components/common/text-input.svelte';
</script>

<form method="post" class="flex flex-col w-min gap-2">
  <TextInput name="name" required label="Name" />
  <TextInput name="description" label="Description" />
  <Button type="submit" style="action">Save</Button>
</form>
