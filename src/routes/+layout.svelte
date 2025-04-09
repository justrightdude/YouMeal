<script>
    import PageWrapper from '$lib/components/PageWrapper.svelte';
    //import Footer from '$lib/components/Footer/Footer.svelte';
    //import Header from '$lib/components/Header/Header.svelte';
    import '$lib/styles/reset.scss';
    import '$lib/styles/fonts.scss';
    import '$lib/styles/global.scss';
  
    let { children } = $props();
  </script>
  
  <PageWrapper>
    <!-- <Header /> -->
  
    <div class="main">
      {@render children?.()}
    </div>
      
    <!-- <Footer /> -->
  </PageWrapper>