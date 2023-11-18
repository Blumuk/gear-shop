

<script>
  $: gridMode = true
  $: listingArrayGlob = []

  import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../../lib/firebase"
import { goto } from "$app/navigation";
import {List, LayoutGrid, Truck, PlusCircle} from "lucide-svelte"


const getListings = async () => {
    const q = query(collection(db, "items"));
    const querySnapshot = await getDocs(q);
    const listingArray = querySnapshot.docs.map(doc => doc.data())
    listingArrayGlob = listingArray
    return listingArray
}
</script>




<main class="flex flex-col items-center w-full h-auto p-8">
    
    
    {#await getListings()}
        <h1>loading</h1>
    {:then listings} 

    <div class="bg-dark-backgroundPrimary h-28 w-full mb-8 rounded-md shadow-md"></div>

        
    <div class="grid grid-cols-5 h-auto gap-4">

        <div on:click={() => {goto("/myprofile/listings/create")}} class="w-[201px] h-72 bg-dark-backgroundPrimary rounded-md shadow-md flex flex-col items-center hover:shadow-xl transition ease-linear duration-150 cursor-pointer overflow-hidden">
            <h1 class="mt-auto mb-3 font-medium text-xl text-dark-text">Create Listing</h1>
            <PlusCircle class="mb-auto" color='#f1f2f6'/>
        </div>

        {#each listingArrayGlob as listing}
        <div on:click={() => {goto("/listings/123")}} class="w-[201px] h-72 bg-dark-backgroundPrimary rounded-md shadow-md flex flex-col items-center hover:shadow-xl transition ease-linear duration-150 cursor-pointer px-3 overflow-hidden">
          <img class="w-44 h-36 mt-3 rounded-md object-cover brightness-90 mb-1" src={listing.images[0]} alt="">
          <h2 class="text-dark-text text-sm font-medium font-work-sans mr-auto truncate">{listing.name}</h2>
          <h3 class="text-dark-disabled text-xs font-regular font-work-sans mr-auto">{listing.brand}</h3>
          <h1 class="text-dark-text text-md font-medium mt-auto font-work-sans mr-auto flex flex-row">£{listing.price}</h1>       
          <h3 class="text-dark-disabled text-sm font-regular font-work-sans mr-auto mb-auto flex flex-row">£6.99<Truck class="pb-1"  color='#6f6f6f'/></h3>
        </div>
      {/each}



    </div>
        
    {/await}
    
    




</main>





