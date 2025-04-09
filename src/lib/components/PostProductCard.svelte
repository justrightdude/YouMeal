<script lang="ts">
	import postProductCardState from "$lib/stores/postProductCardState";
  import contentBasketCards from "$lib/stores/contentBasketCards";
  import contentProductListeningCardSelected from "$lib/stores/contentProductListeningCardSelected";
  import contentBasketNum from "$lib/stores/contentBasketNum";
  import contentBasketSum from "$lib/stores/contentBasketSum";

  let clickedNum = 1
</script>

<div class="post-product-card" >
  <div class="post-product-card__title">
    <button onclick={() => $postProductCardState = !$postProductCardState}>
      <img src="/images/post-close.png" alt="">
    </button>
    <h2>{$contentProductListeningCardSelected.title}</h2>
  </div>
  <div class="post-product-card__content">
    <img class="post-product-card__img" src={$contentProductListeningCardSelected.img} alt="">
    <div>
      <h4>
        Супер мясное наслаждение! Большая рубленая 
        котлета из свежего говяжего мяса покорит вас 
        своей сочностью, а хрустящие листья салата 
        добавят свежести.
      </h4>
      <div class="post-product-card__composition">
        <h4>Cостав:</h4>
        <ul>
          <li>Пшеничная булочка</li>
          <li>Котлета из говядины</li>
          <li>Красный лук</li>
          <li>Листья салата</li>
          <li>Соус сорчичный</li>
        </ul>
        <p>{$contentProductListeningCardSelected.weight} г</p>
      </div>
    </div> 
  </div>
  <div class='post-product-card__add'>
    <div class='post-product-card__buttons'>
      <button onclick={() => {
        if ($contentBasketCards.find(elementTitle => elementTitle.title === $contentProductListeningCardSelected.title)) {
          let temporaryBasketCards = $contentBasketCards
          $contentBasketCards = []
          temporaryBasketCards.forEach((cards) => {
          if (cards.title === $contentProductListeningCardSelected.title) {
            cards.num+=clickedNum}
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
              title: $contentProductListeningCardSelected.title,
              img: $contentProductListeningCardSelected.img,
              price: $contentProductListeningCardSelected.price,
              weight: $contentProductListeningCardSelected.weight,
              num: clickedNum
            }]
          })
        }
        $contentBasketNum+=clickedNum
        $contentBasketSum+=$contentProductListeningCardSelected.price*clickedNum
        $postProductCardState = !$postProductCardState
      }}>Добавить</button>
      <div class="post-product-card__buttons__calc">
        <button onclick={() => {
          if (clickedNum === 1) {
            clickedNum = 1}
          else {
            clickedNum-=1}
        }}>-</button>
        <p>{clickedNum}</p>
        <button onclick={() => clickedNum+=1}>+</button>
      </div>
    </div>
    <h3>{$contentProductListeningCardSelected.price} грн</h3>
  </div>
</div>

<style lang="scss">
  h2, h3{
    font-size: 2.8rem;
    font-weight: 600;
  }
  h3 {
    margin: 1rem 0 0 80%;
    font-size: 1.6rem;
    @media (min-width: 768px) {
      margin: 0;
    }
    @media (min-width: 1024px) {
      font-size: 2.4rem;
    }
  }
  h4 {
    font-size: 1.2rem;
    font-weight: 400;
      @media (min-width: 768px) {
        margin-top: 1rem;
      }
      @media (min-width: 1024px) {
        font-size: 1.6rem;
      }
  }
  .post-product-card {
    &__title {
      @media (min-width: 768px) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
      }
      button {
        padding: 0;
        margin: 1rem 0 0 92%;
        width: 2.4rem;
        border: 0;
        @media (min-width: 768px) {
          margin: 0;
        }
      }
      h2 {
        @media (min-width: 1024px) {
          font-size: 4rem;
        }
      }

    }
    &__content {
      @media (min-width: 768px) {
        display: flex;
        gap: 1rem;
      }
      @media (min-width: 1024px) {
        gap: 1.6rem;
      }
    }
    &__img {
      width: 30rem;
      margin: 1.2rem auto;
      @media (min-width: 768px) {
        width: 22.6rem;
      }
      @media (min-width: 1024px) {
        width: 27.6rem;
      }
    }
    &__composition {
      margin: 1rem 0;
      h4, li, p {
        font-size: 1rem;
        font-weight: 600;
        @media (min-width: 1024px) {
          font-size: 1.2rem;
        }
      }
      p {
        color: rgba(177, 177, 177, 1);
        font-weight: 400;
      }
    }
    
    &__add {
      @media (min-width: 768px) {
        margin-top: 1.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      @media (min-width: 1024px) {
        margin-top: 4rem;
      }
    }
    &__buttons {
      display: flex;
      align-items: center;
      gap: 1rem;
      @media (min-width: 1024px) {
          gap: 2.8rem;
      }
      button {
        width: 21.8rem;
        height: 3rem;
        border: 0;
        border-radius: 0.8rem;
        background-color: rgba(255, 112, 32, 1);
        color: rgba(255, 255, 255, 1);
        font-size: 1.2rem;
        font-weight: 400;
        @media (min-width: 1024px) {
          width: 27.6rem;
          height: 4rem;
          font-size: 1.6rem;
          border-radius: 1.2rem;
        }
      }
      &__calc {
        display: flex;
        gap: 1rem;
        padding: 0;
        button {
          padding: 0;
          width: 2rem;
          height: 2.2rem;
          font-size: 1.6rem;
          background-color: rgba(255, 255, 255, 1);
          color: rgba(0, 0, 0, 1);
        }
        p {
          height: 2.2rem;
          font-size: 1.6rem;
        }
      }
    }
  }
</style>