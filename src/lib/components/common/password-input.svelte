<script lang="ts">
  export let name: string;
  export let label = '';
</script>

<label class="flex gap-2 justify-between">
  {#if label}
    <span>{label}</span>
  {/if}
  <input class="border-accent-primary border border-solid rounded-sm" type="password" {name} />
</label>
