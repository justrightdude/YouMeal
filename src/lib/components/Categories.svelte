<script>
    import categoriesSelected from "$lib/stores/categoriesSelected";
		import {categories} from "$lib/data/categories";
	
    let activeItemIndex = $state(0);

		$categoriesSelected = categories[0].name;
</script>

<div class="categories">
	<div class="center">
    <ul class="categories__list">
      {#each categories as item, i}                
        <li>
          <button 
            class:active={activeItemIndex === i} 
            onclick={() => {
                $categoriesSelected = item.name; 
                activeItemIndex = i;
            }}>
            <img src={item.img} alt={item.name} />  
            {item.name}
          </button>
        </li>                 
      {/each}
    </ul>
  </div>
</div>



<style lang="scss">
    .categories {
      margin: 0 auto;
      margin-bottom: 2.4rem;
        &__list {
            display: flex;
            gap: 0.8rem;
            overflow: scroll;
            scrollbar-width: none;
						@media (min-width: 767px) {
              gap: 2rem;
						}
        }
        
        li {
          display: flex;
          flex-direction: row;
          white-space: nowrap;
          font-size: 1.2rem;
          border: 0.1rem solid white;
          border-radius: 2rem;
        }
        li:hover {
          @media (min-width: 767px) {
              border: 0.1rem solid rgba(248, 99, 16, 1);
            }
        }
        button {
            width: 9rem;
            padding: 0.4rem;
            border: 0;
            display: flex;
            align-items: center;
            gap: 0.8rem;
            border-radius: 2rem;
            @media (min-width: 767px) {
              width: 12rem;
            }
        }
        
        .active {
            background-color: #FFAB08;
        }
        img {
            width: 2.4rem;
            height: 2.4rem;
        }
    }

</style>