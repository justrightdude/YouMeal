<script lang="ts">
  import Categories from "$lib/components/Categories.svelte";
	import Content from "$lib/components/Content.svelte";
	import Footer from "$lib/components/Footer.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import PageConfig from "$lib/components/PageConfig.svelte";
  import PageContent from "$lib/components/PageContent.svelte";
	import Post from "$lib/components/Post.svelte";
  import postRegisterState from "$lib/stores/postRegisterState";
  import postProductCardState from "$lib/stores/postProductCardState";
</script>


<PageConfig 
  title="YouMeal"
  description=""
/>

<PageContent>
  {#if $postRegisterState || $postProductCardState}
    <Post/>
  {/if}
  <Hero/>
  <Categories/>
  <Content/>
  <Footer/>
</PageContent>
