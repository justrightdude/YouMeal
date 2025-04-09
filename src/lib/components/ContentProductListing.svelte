<script lang="ts">
  import ContentProductListingCard from "./ContentProductListingCard.svelte";
  import categoriesSelected from "$lib/stores/categoriesSelected"

  interface Props {
		items: {
      category: string;
      img: string;
      price: number;
      title: string;
      weight: number;
    }[];
	}
  
	let {items}: Props = $props();
</script>


<div class="product-listing">
  <div class="product-listing__items">
    <h2>{$categoriesSelected}</h2>
    {#each items as item}
      {#if item.category === $categoriesSelected}
        <ContentProductListingCard
          img={item.img}
          price={item.price}
          title={item.title}
          weight={item.weight}
        />
      {/if}
    {/each}
  </div>
</div>

<style lang="scss">
  .product-listing {
    h2 {
      width: 88%;
      font-size: 2.8rem;
      font-weight: 600;
      @media (min-width: 1024px) {
        font-size: 4rem;
      }
    }
    &__items {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }
  }
</style>