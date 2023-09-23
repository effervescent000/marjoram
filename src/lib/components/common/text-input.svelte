<script lang="ts">
	export let name: string;
	export let label = '';
	export let isPassword = false;
</script>

<label>
	<span>{label}</span>
	<input type={isPassword ? 'password' : 'text'} {name} />
</label>
