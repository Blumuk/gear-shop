<script>
    import { fly, fade} from "svelte/transition";
    import { page } from "$app/stores";
    export let animData
</script>




{#key animData}
  <div class="" in:fly={{ x:-200,  duration: 300, delay: 300 }} out:fly={{ x:200, duration: 300}}>
    <slot  />
  </div>
{/key}

