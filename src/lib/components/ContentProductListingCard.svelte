<script lang="ts">
	import postProductCardState from "$lib/stores/postProductCardState";
  import contentProductListeningCardSelected from "$lib/stores/contentProductListeningCardSelected";
  import contentBasketCards from "$lib/stores/contentBasketCards";
  import contentBasketNum from "$lib/stores/contentBasketNum";
  import contentBasketSum from "$lib/stores/contentBasketSum";
  
  interface Props {
		img: string;
    price: number;
    title: string;
    weight: number;
	}
  let num = 1
	let {img, price, title, weight }: Props = $props();
</script>

<div class="product-card" >
  <button onclick={() => {
    $postProductCardState = !$postProductCardState;
    $contentProductListeningCardSelected.title = title;
    $contentProductListeningCardSelected.img = img;
    $contentProductListeningCardSelected.price = price;
    $contentProductListeningCardSelected.weight = weight;
    $contentProductListeningCardSelected.num = num;
  }}><img src={img} alt=""></button>
  <div class="product-card__price"><h2>{price} грн</h2></div>
  <div class="product-card__title"><h3>{title}</h3></div>
  <p>{weight} г</p>
  <button onclick={() => {
    if ($contentBasketCards.find(elementTitle => elementTitle.title === title)){
      let temporaryBasketCards = $contentBasketCards
      $contentBasketCards = []
      temporaryBasketCards.forEach((cards) => {
        if (cards.title === title) {
          cards.num+=1
        }
        contentBasketCards.update($contentBasketCards => {
         return [...$contentBasketCards, {
          title: cards.title,
          img: cards.img,
          price: cards.price,
          weight: cards.weight,
          num: cards.num
         }]
        })
      })
    }
    else {
      contentBasketCards.update($contentBasketCards => {
         return [...$contentBasketCards, {
          title: title,
          img: img,
          price: price,
          weight: weight,
          num: num
         }]
      })
    }
    $contentBasketNum+=1
    $contentBasketSum+=price
  }}>Добавить</button>
</div>

<style lang="scss">
  .product-card {
    display: flex;
    flex-direction: column;
    width: 13.7rem;
    height: 23.5rem;
    padding: 0.4rem;
    @media (min-width: 1024px) {
      width: 28.8rem;
      height: 39.9rem;
      padding: 1.2rem;
    }
    img {
      width: 13.7rem;
      height: 12rem;
      border-radius: 0.8rem;
      @media (min-width: 1024px) {
        width: 27.6rem;
        height: 22rem;
      }
    }
    h2 {
      font-size: 1.6rem;
      font-weight: 600;
      @media (min-width: 1024px) {
        font-size: 2.4rem;
      }
    }
    h3, p, button {
      font-size: 1.2rem;
      font-weight: 400;
      @media (min-width: 1024px) {
        font-size: 1.6rem;
      }
    }
    p {
      font-weight: 600;
    }
    button {
      padding: 0;
      width: 100%;
      border: 0;
    }
  }
</style>