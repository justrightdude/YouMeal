<script>
    let nameLogo = '/images/namelogo-orange.png' ;
    let vkLogo = '/images/footer__vk.png';
    let telegLogo = '/images/footer__teleg.png';
</script>


<div class="footer">
    <div class="center">
        <div class="footer__content">
            <div class="footer__namelogo">
                <img src={nameLogo} alt="">
            </div>
            <div class="footer__incontent">
                <div>
                    <h2>Номер для заказа</h2>
                    <a href="tel:+7(930)833-38-11">+7(930)833-38-11</a>
                </div>
                <div>
                    <h2>Мы в соцсетях</h2>
                    <ul>
                        <li><button type="button" id="vk"><img src={vkLogo} alt=""></button></li>
                        <li><button type="button" id="teleg"><img src={telegLogo} alt=""></button></li>
                    </ul>
                </div>
            </div>
        </div>
        <h3>© YouMeal, 2022<br>Design: Anastasia Ilina</h3>
    </div>
</div>

<style lang="scss">
    .footer {
        @media (min-width: 768px) {
            padding: 0 2rem;
        }
        @media (min-width: 1024px) {
            padding: 0 5rem;
        }
        &__namelogo {
            width: 20rem;
            margin-top: 2rem;
            margin-bottom: 2rem;
        }
        &__incontent {
            @media (min-width: 768px) {
                display: flex;
                flex-direction: row;
                gap: 17rem;
            }
        }
        &__content {
            @media (min-width: 1024px) {
                display: flex;
                flex-direction: row;
                gap: 20%;
            }
        }
        h2 {
           font-size: 18px;
           font-weight: 400;
           margin-top: 1rem;
        }
        a {
            font-size: 12px;
            font-weight: 400;
        }
        ul {
            display: flex;
            flex-direction: row;
            gap: 1rem;
        }
        li {
            width: 3.6rem;
            display: flex;
        }
        button {
            border: 0;
        }
        img {
            height: 100%;
            width: 100%;
        }
        h3 {
            margin-top: 2rem;
            font-size: 12px;
            font-weight: 400;
        }
    }
</style>