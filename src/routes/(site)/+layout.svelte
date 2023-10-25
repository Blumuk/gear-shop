<script>
    import { userAuthStore } from "../../lib/firebase"
    import {goto} from '$app/navigation'
    import { Bell, ChevronDown, Search, ShoppingCart } from "lucide-svelte";
    
    
    
    
  



    
    
  </script>



<main class="h-full overflow-hidden bg-dark-backgroundSecondary">
    <div class="w-full h-16 bg-dark-backgroundPrimary flex flex-row items-center shadow-md">
        <h1 class="font-sans font-semibold text-xl ml-2 text-dark-text">Fleagear</h1>

        <div class="h-9 w-90 flex flex-row mb-4 shadow-md rounded-md mx-auto my-auto"><input type="text" placeholder="Search for Gear..." class="w-[21.5rem] h-9 outline-none rounded-tl-md rounded-bl-md bg-dark-backgroundSecondary font-firaSans text-dark-text border-solid border-2 border-dark-backgroundSecondaryLight indent-2 placeholder-dark-disabled" ><div class="w-10 h-full bg-dark-backgroundSecondaryLight rounded-br-md rounded-tr-md border-solid border border-dark-backgroundSecondaryLight flex flex-row items-center justify-center"><button on:click={() => {goto("/listings")}} class="h-full w-full flex items-center justify-center"><Search color='#f5f6fa'/></button></div></div>
           
           {#if $userAuthStore}
                
                <Bell class="mx-2" color='#f5f6fa'/>
                <ShoppingCart class="mx-2" color='#f5f6fa'/>
                <img on:click={() => {userAuthStore.logout()}} class="w-6 h-6 mx-2 rounded-full object-cover" src="https://machohairstyles.com/wp-content/uploads/2017/03/haircut-for-men-with-square-faces-9.jpg" alt="">
                <ChevronDown class="mx-2" color='#f5f6fa'/>
                
                
           {:else}
             <button on:click={() => {goto("/login")}} class="w-20 h-8 bg-black mr-4 rounded-md text-white">Sign In</button>
           {/if}
           
           
           
            
        </div>
    
    <slot class="h-full "></slot>
</main>