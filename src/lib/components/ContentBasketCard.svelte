<script lang="ts">
    import contentBasketCards from "$lib/stores/contentBasketCards";
    import contentBasketNum from "$lib/stores/contentBasketNum";
    import contentBasketSum from "$lib/stores/contentBasketSum";
	
    interface Props {title: string;}
	let {title}: Props = $props();
    let cardIndex = $contentBasketCards.findIndex(elementTitle => elementTitle.title === title)
</script>

<div class="basketCard">
    <div class="basketCard__content">
        <img src={$contentBasketCards[cardIndex].img} alt="">
        <div class="basketCard__content__inner">
            <h2>{$contentBasketCards[cardIndex].title}</h2>
            <p>{$contentBasketCards[cardIndex].weight}г</p>
            <h2>{$contentBasketCards[cardIndex].price} грн</h2>
        </div>
    </div>
    <div class="basketCard__calc">
        <button onclick={() => {
            $contentBasketNum-=1
            $contentBasketSum-=$contentBasketCards[cardIndex].price
            let temporaryBasketCards = $contentBasketCards
            $contentBasketCards = []
            temporaryBasketCards.forEach((cards) => {
                if (cards.title === temporaryBasketCards[cardIndex].title) {
                    cards.num-=1
                    if (cards.num > 0) {
                        contentBasketCards.update($contentBasketCards => {
                        return [...$contentBasketCards, {
                            title: cards.title,
                            img: cards.img,
                            price: cards.price,
                            weight: cards.weight,
                            num: cards.num
                        }]
                    })
                    }
                }
                else {
                    contentBasketCards.update($contentBasketCards => {
                        return [...$contentBasketCards, {
                            title: cards.title,
                            img: cards.img,
                            price: cards.price,
                            weight: cards.weight,
                            num: cards.num
                        }]
                    })
                }
            })
            
            
        }}>-</button>
        <p>{$contentBasketCards[cardIndex].num}</p>
        <button onclick={() => {
            let temporaryBasketCards = $contentBasketCards
            $contentBasketCards = []
            temporaryBasketCards.forEach((cards) => {
                if (cards.title === temporaryBasketCards[cardIndex].title) {
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
            $contentBasketNum+=1
            $contentBasketSum+=$contentBasketCards[cardIndex].price
        }}>+</button>
    </div>
</div>

<style lang="scss">
    .basketCard {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 0 0 0.5rem;
        img {
            width: 6.4rem;
            height: 5.2rem;
            border-radius: 0.8rem;
            background-color: aqua;
        }
        &__content {
            display: flex;
            gap: 1rem;
            text-align: left;
            h2, p {
                font-size: 1.2rem;
                font-weight: 400;
            }
            p {
                color: rgba(177, 177, 177, 1);
            }
        }
        &__calc {
            display: flex;
            gap: 1rem;
            padding: 0;
            button {
                border: 0;
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
</style>