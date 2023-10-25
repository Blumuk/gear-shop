<script>
    import AnimatedAuthRoute from "../../lib/components/animatedAuthRoute.svelte";
    export let data
    import { fly } from "svelte/transition";

    

</script>



<main class="bg-dark-backgroundPrimary text-neutral-50 flex flex-row h-full shadow-lg items-center justify-center">
    <AnimatedAuthRoute animData={data.url}>
        <slot  />
    </AnimatedAuthRoute>
     
</main>





