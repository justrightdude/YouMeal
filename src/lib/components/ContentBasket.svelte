<script lang="ts">
	import ContentBasketCard from "./ContentBasketCard.svelte";
    import contentBasketCards from "$lib/stores/contentBasketCards";
    import contentBasketNum from "$lib/stores/contentBasketNum";
    import contentBasketSum from "$lib/stores/contentBasketSum";
    import postRegisterState from "$lib/stores/postRegisterState";

    let basketOpened = $state(false)
    
    $contentBasketCards = []
</script>

<div class="basket">
    <div class="basket__viewer">
        <button onclick={() => basketOpened = !basketOpened}>
            <h2>Корзина</h2>
            <h2>{$contentBasketNum}</h2>
        </button> 
    </div>
    {#if basketOpened}
        <div class="basket__opened">
            <div class="basket__order">
                {#each $contentBasketCards as card}
                    <ContentBasketCard title = {card.title}/>
                {/each}
            </div>
            <div class="basket__calc">
                <h2>Итого</h2>
                <h2>{$contentBasketSum}</h2>
            </div>
            <button onclick={() => {
                if (!($contentBasketNum === 0)) {
                    $postRegisterState = !$postRegisterState
                }
            }}>Оформить заказ</button>
            <p>Бесплатная доставка</p>
        </div>
    {/if}
</div>

<style lang="scss">
    .basket {
        width: 30rem;
        margin: 0 auto 2rem;
        text-align: left;
        @media (min-width: 768px) {
            margin: 0 0 2rem;
        }
        @media (min-width: 1024px) {
            margin: 6rem 0 2rem;
        }
        button {
            display: flex;
            justify-content: space-between;
            width: 30rem;
            border: 0;
        }
        &__order {
            text-align: center;
            align-items: center;
            width: 30rem;
        }

        &__calc {
            padding: 0.5rem;
            display: flex;
            justify-content: space-between;
            width: 100%;
        }

        &__opened {
            button {
                margin: 0.5rem;
                color: rgba(255, 255, 255, 1);
                background-color: rgba(255, 112, 32, 1);
                height: 3rem;
                border-radius: 0.8rem;
                align-items: center;
                justify-content: center;
                font-size: 1.2rem;
                font-weight: 400;
            }
            p {
                margin-top: 1rem;
                font-size: 1rem;
                font-weight: 400;
            }
        }
    }
</style>