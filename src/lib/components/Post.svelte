<script>
    import postProductCardState from "$lib/stores/postProductCardState";
    import PostProductCard from "$lib/components/PostProductCard.svelte";
    import postRegisterState from "$lib/stores/postRegisterState";
	import PostRegist from "./PostRegister.svelte";

    let background = $state("")
    $effect (() => {
        if ($postRegisterState === true) {
            background = "backgroundgradient"
        }
        else {
            background = ""
        }
    })
</script>

<div class="post">
    <div class="center">
        <div class="post__inner {background}">
            {#if $postProductCardState}
                <PostProductCard/>
            {/if}
            {#if $postRegisterState}
                <PostRegist/>
            {/if}
        </div>
    </div>
</div>

<style lang="scss">
    .backgroundgradient {
        @media (min-width: 1024px) {
            background: linear-gradient(to right, rgba(255, 171, 8, 1) 50%, rgba(242, 242, 243, 1) 50%);
        }
    }
    .post {
        position: fixed;
        background-color: rgba(255, 255, 255, 1);
        width: 100%;
        height: 100%;
        z-index: 1;
        @media (min-width: 768px) {
            background-color: rgba(0, 0, 0, 0.8);
        }
        &__inner {
            margin: 0 auto;
            width: 30rem;
            height: 100%;
            z-index: 2;
            background-color: rgba(255, 255, 255, 1);
            @media (min-width: 768px)  {
                position: relative;
                border-radius: 2.4rem;
                margin: 18% auto;
                padding: 1rem 1.6rem;
                width: 52.4rem;
                height: 32.4rem;
            }
            @media (min-width: 1024px)  {
                width: 68.4rem;
                height: 43.2rem;
            }
        }
        
    }
</style>