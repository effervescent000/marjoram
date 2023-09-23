<script lang="ts">
  export let name: string;
  export let label = '';
  export let isPassword = false;
</script>

<label class="flex gap-2 justify-between">
  <span>{label}</span>
  <input
    class="border-accent-primary border border-solid rounded-sm"
    type={isPassword ? 'password' : 'text'}
    {name}
  />
</label>
