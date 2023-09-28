<script lang="ts">
  // PROPS
  export let label: string;
  export let compress = true;
</script>

<td
  colspan={2}
  class={`bg-bg-secondary border-accent-secondary border-solid border capitalize px-1 ${
    compress ? 'w-min text-center' : 'whitespace-nowrap'
  }`}
>
  {label}
</td>
