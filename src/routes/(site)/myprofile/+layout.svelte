
<script>

import { goto } from "$app/navigation";


</script>




<main class="flex flex-row items-center h-[100%] justify-center">
    
        <div class="w-72 h-5/6 flex flex-col bg-dark-backgroundPrimary rounded-tl-md rounded-bl-md shadow-md mb-10">
            <img class="w-3/6 mx-auto rounded-full mt-8" src={"https://photo.isu.pub/gilesowencockett/photo_large.jpg"} alt="">
            <h1 class="mx-auto font-work-sans text-3xl font-medium mt-4 text-dark-text mb-14">Giles Cockett</h1>
            <button on:click={() => {goto("/myprofile/account")}} class="w-5/6 h-16 font-work-sans font-medium text-dark-text mx-auto bg-dark-backgroundPrimaryLight rounded-md shadow-sm hover:shadow-lg transition duration-150 ease-linear my-4">Manage Account</button>
            <button on:click={() => {goto("/myprofile/listings")}}  class="w-5/6 h-16 font-work-sans font-medium text-dark-text mx-auto bg-dark-backgroundPrimaryLight rounded-md shadow-sm hover:shadow-lg transition duration-150 ease-linear">Manage Listings</button>
        </div>
    
    
        <div class="h-5/6 w-3/6 bg-dark-backgroundPrimaryLight rounded-tr-md rounded-br-md shadow-md mb-10">
            <slot></slot>
        </div>

</main>