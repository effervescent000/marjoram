<script lang="ts">
  export let name: string;
  export let value: string | number | undefined = undefined;
</script>

<input type="hidden" {name} {value} />
