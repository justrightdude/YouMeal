<script>
    let nameLogo = '/images/namelogo-white.png' ;
    let picLogo = '/images/hero-piclogo.png';

    import herobg from '$lib/svg/background-320.svg?raw';   
</script>




<div class="hero">
    <div class="hero__bg">
        <div class="hero__bg-decoration">{@html herobg}</div>
    </div> 
    <div class="center">         
        <div class="hero__inner">
            <div class="hero__namelogo">
                <img src={nameLogo} alt="name-logo">
            </div>
            <div class="hero__content">
                <div class="hero__content__text">
                    <h1>Только самые<br/><span>сочные бургеры!</span></h1>
                    <p>Бесплатная доставка от 599₽</p>
                </div>
                <div class="hero__content__piclogo">
                    <img src={picLogo} alt="pic-logo">
                </div>
            </div>    
        </div>      
    </div>
</div>




<style lang="scss">
    .hero {
        margin-bottom: 2rem;
        position: relative;

        &__bg {
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            z-index: -1;
        }

        &__bg-decoration {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;

            :global(svg) {
                display: block;
                object-fit: cover;
                height: 100%;
                width: 100%;
            }
        }

        &__inner {
            padding-bottom: 2rem;
            position: relative;

            @media (min-width: 767px) {
                padding-bottom: 5rem;
            }
        }

        &__namelogo {
            margin: 0 auto;
            width: 15rem;
        }

        &__content {
            margin-top: 2.4rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            align-items: center;
            gap: 3.5rem;

            @media (min-width: 767px) {
                flex-direction: row-reverse;
                text-align: left;
                align-items: normal;
            }
            
            &__text {
            color: rgba(255, 255, 255, 1);

                h1 {
                    font-size: 3rem;
                    font-weight: 800;
                }

                span {
                    color: rgba(255, 92, 0, 1);
                }

                p {
                    font-size: 1.2rem;
                    font-weight: 400;
                }

                @media (min-width: 767px) {
                    margin-top: 1.4rem;
                    h1 {
                        font-size: 3.6rem;
                    }
                }
                @media (min-width: 1024px) {
                    margin-top: 1.8rem;
                    h1 {
                        font-size: 5rem;
                    }

                    p {
                        font-size: 1.6rem;
                    }
                }  
            }

            &__piclogo {
                width: 17.6rem;

                @media (min-width: 1024px) {
                    width: 25.3rem;
                }
            }


        }
    }
</style>