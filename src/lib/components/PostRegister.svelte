<script lang="ts">
    import postRegisterState from "$lib/stores/postRegisterState";
    import contentBasketCards from "$lib/stores/contentBasketCards";
    import contentBasketNum from "$lib/stores/contentBasketNum";
    import contentBasketSum from "$lib/stores/contentBasketSum";

    let dotImg = '/images/postRegister__dot.png'
    let donut = '/images/postRegister__donut.png'
    let delivery = $state(false)
</script>

<div class="post-register">
    <div class="post-register__contentleft">
        <img src={donut} alt="">
    </div>
    <div class="post-register__contentright">
        <div class="post-register__title">
            <button onclick={() => $postRegisterState = !$postRegisterState}>
                <img src="/images/post-close.png" alt="">
            </button>
            <h2>Доставка</h2>
        </div>
        <div class="post-register__inner">
            <input type="text" placeholder="Ваше имя">
            <input type="tel" placeholder="Телефон">
            <div class="post-register__buttons">
                <div>
                    <button onclick={() => delivery = false}>
                        {#if delivery === false}
                            <img src={dotImg} alt="">
                        {/if}
                        <h2>Самовывоз</h2>
                    </button>
                </div>
                <div>
                    <button onclick={() => delivery = true}>
                        {#if delivery === true}
                            <img src={dotImg} alt="">
                        {/if}
                        <h2>Доставка</h2>
                    </button>
                </div> 
            </div>
            <div class="post-register__delivery">
                {#if delivery}
                    <input type="text" placeholder="Улица, дом, квартира">
                    <div class="post-register__indelivery">
                        <input type="text" placeholder="Этаж">
                        <input type="text" placeholder="Домофон">
                    </div>
                {/if}
            </div>
        </div>
        <button class="post-register__design" onclick={() => {
            $contentBasketCards = []
            $contentBasketNum = 0
            $contentBasketSum = 0
            $postRegisterState = !$postRegisterState
        }}>Оформить</button>
    </div>
</div>

<style lang="scss">
    .post-register {
        @media (min-width: 1024px) {
            display: flex;
        }
        &__contentleft {
            display: none;
            @media (min-width: 1024px) {
                display: block;
                width: 34rem;
                img {
                  width: 19.7rem;
                  margin: 7rem auto;  
                }
            }
        }
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
                font-size: 1.6rem;
                font-weight: 600;
                @media (min-width: 1024px) {
                    font-size: 2.4rem;
                }
            }

        }
        &__inner {
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
            input {
                width: 30rem;
                height: 3rem;
                margin-bottom: 0.8rem;
                border: 0;
                font-size: 1rem;
                font-weight: 400;
                @media (min-width: 1024px) {
                    height: 4rem;
                }
            }
        }
        &__buttons {
            margin: 0.8rem 0;
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
            div {
                display: flex;
                align-items: center;
                gap: 1rem;
                button {
                    display: flex;
                    align-items: center;
                    border: 0;
                    img {
                        width: 0.6rem;
                        height: 0.6rem;
                        margin-right: -0.6rem;
                    }
                    h2 {
                       padding-left: 2.4rem; 
                       font-size: 1.2rem;
                       font-weight: 400;
                    }
                }
            }  
        }
        &__indelivery {
            @media (min-width: 768px) {
                display: flex;
            }
            @media (min-width: 1024px) {
                input {
                    width: 14.3rem;
                }
            }
        }
        &__design {
            position: absolute;
            bottom: 3.2rem;
            border: 0;
            border-radius: 0.8rem;
            background-color: rgba(255, 112, 32, 1);
            color: rgba(255, 255, 255, 1);
            width: 30rem;
            height: 3rem;
            @media (min-width: 768px) {
                bottom: 2.9rem;
            }
        }
    }
</style>