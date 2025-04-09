<script lang="ts">
	interface Props {
    title: string;
    description: string;
	}

  let {
    title = '',
    description = '',
	}: Props = $props();
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />
</svelte:head>