<script lang="ts">
	import ContentBasket from "./ContentBasket.svelte";
    import ContentProductListing from "./ContentProductListing.svelte";
    import { productsList } from "$lib/data/productList";
</script>

<div class="content">
    <div class="center">
        <div class="incontent">
            <ContentBasket/>
            <ContentProductListing items={productsList}/>  
        </div>
    </div>
</div>



<style lang="scss">
    .incontent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media (min-width: 1024px) {
            flex-direction: row;
            gap: 1.2rem;
        }
    }
</style>