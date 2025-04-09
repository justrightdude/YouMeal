<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let { children } = $props();
</script>

<div
	class="wrapper"
	in:fade={{ duration: 300, delay: 300, easing: cubicOut }}
	out:fade={{ duration: 300, easing: cubicOut }}
>
	{@render children?.()}
</div>
