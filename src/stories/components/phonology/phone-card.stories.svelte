<script context="module">
  import PhoneCard from '$lib/components/phonology/phone-card.svelte';

  export const meta = {
    title: 'Phone Card',
    component: PhoneCard
  };
</script>

<script lang="ts">
  import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
  <PhoneCard base_phone="k" removeCallback={() => {}} index={1} {...args} />
</Template>

<Story name="Primary" />
