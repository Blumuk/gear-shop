<script>
    import { userAuthStore } from "../../lib/firebase"
    import {goto} from '$app/navigation'
  



    
    
  </script>



<main class="h-full overflow-hidden">
    <div class="w-full h-16 bg-slate-700 flex flex-row items-center shadow-md">
        <h1 class="font-sans font-semibold text-xl ml-2 text-white">Fleagear</h1>
        <input placeholder="Search for Gear..." class="w-96 ml-auto h-7 outline-none rounded-l-md shadow-md px-2" type="text">
        <button on:click={() => {document.location = "/login"}} class="h-7 w-7 bg-slate-800 mr-auto text-white rounded-r-md shadow-md"></button>
        <div class="min-w-28 h-full flex flex-row items-center">
           
           {#if $userAuthStore}
                <img class="w-11 h-11 ml-3 mr-3 rounded-full object-cover" src="https://machohairstyles.com/wp-content/uploads/2017/03/haircut-for-men-with-square-faces-9.jpg" alt="">
                <h6 class="font-sans font-semibold text-l mr-3 text-white">{$userAuthStore.uid}</h6>
           {:else}
             <button on:click={() => {goto("/login")}} class="w-20 h-8 bg-black mr-4 rounded-md text-white">Sign In</button>
           {/if}
           
           
           
            
        </div>
    </div>
    <slot class="h-full"></slot>
</main>