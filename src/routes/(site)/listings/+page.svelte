<script>
  $: gridMode = true
  $: listingArrayGlob = []

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../lib/firebase"
import { goto } from "$app/navigation";
import {List, LayoutGrid, Truck} from "lucide-svelte"


const getListings = async () => {
    const q = query(collection(db, "items"));
    const querySnapshot = await getDocs(q);
    const listingArray = querySnapshot.docs.map(doc => doc.data())
    listingArrayGlob = listingArray
    return listingArray
}

function compareLowToHigh( a, b ) {
  if ( a.price < b.price ){
    return -1;
  }
  if ( a.price > b.price ){
    return 1;
  }
  return 0;
}

function compareHighToLow( a, b ) {
  if ( a.price > b.price ){
    return -1;
  }
  if ( a.price < b.price ){
    return 1;
  }
  return 0;
}

function compareNewest( a, b ) {
  return a.createdTimestamp - b.createdTimestamp
}

function sortByChanged(){
 const sortBySelect = document.getElementById('sortBySelect')



  if (sortBySelect.value == "LTH"){
    listingArrayGlob = listingArrayGlob.sort(compareLowToHigh)
  }

  if (sortBySelect.value == "HTL"){
    listingArrayGlob = listingArrayGlob.sort(compareHighToLow)
  }

  if (sortBySelect.value == "NEW"){
    listingArrayGlob = listingArrayGlob.sort(compareNewest)
  }

}



</script>







<main class="flex w-full h-full flex-row justify-center">

  <div class="flex flex-col"> 
    
    <div class="h-12 w-12 my-1 "></div>

    <div class="h-28 w-64 mr-4 rounded-md bg-dark-backgroundPrimary">Price Range</div>
    <div class="h-48 w-64 mr-4 rounded-md bg-dark-backgroundPrimary mt-4">Colours</div>
    <div class="h-96 w-64 mr-4 mt-4 rounded-md bg-dark-backgroundPrimary">Type</div>

  </div>
 
  
  
  <div class="w-1/3 h-full">
  
  <div class="w-full h-12 flex flex-row items-center my-1">
    <select id="sortBySelect" on:change={() => {sortByChanged()}} class="mr-auto h-7 w-36 rounded-md font-work-sans shadow-sm hover:shadow-md transition ease-linear duration-100 bg-dark-backgroundPrimary my-auto text-dark-text text-xs text-center outline-none">
     <option value="LTH">Price: Low to High</option>
     <option value="HTL">Price: High to Low</option>
     <option value="NEW">Newest</option>
    </select>
    <button on:click={() => {gridMode = true}} class="ml-auto h-7 w-7 rounded-md shadow-sm hover:shadow-md transition ease-linear duration-100 bg-dark-backgroundPrimary my-auto"> <LayoutGrid class="mx-auto my-auto w-5" color='#f5f6fa'/>  </button>
    <div class="h-1/3 bg-dark-disabled w-[1px] my-auto mx-2"></div>
    <button on:click={() => {gridMode = false}} class="h-7 w-7 rounded-md shadow-sm hover:shadow-md transition ease-linear duration-100 bg-dark-backgroundPrimary my-auto"> <List color='#f5f6fa' class="w-5 my-auto mx-auto"/>  </button>
  </div>

  {#await getListings()}

    <h1>loading</h1>


  {:then listingsArray}

   {#if gridMode}
     
   <div class=" w-full grid grid-cols-4 gap-4 ">

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

   {:else}
   
    <div class="h-full w-full  flex flex-col items-center">

      {#each listingArrayGlob as listing}
        <div class="w-full h-44 bg-dark-backgroundPrimary rounded-md shadow-md flex flex-row items-center mb-7">
        <img class="h-40 w-40 ml-2 object-cover rounded-md brightness-90" src={listing.images[0]} alt="">
        <div class="flex flex-col h-full py-4 pl-4">
        <h1 class="font-semibold text-dark-text text-xl">{listing.name}</h1>
        <h2 class="font-medium text-dark-disabled text-ml ">{listing.brand}</h2>
        <h3 class="mx-auto my-auto font-medium text-dark-text text-2xl">£{listing.price}</h3>
        <button on:click={() => {goto("/listings/123")}} class="bg-dark-brand1 w-20 mx-auto mt-auto rounded-md text-dark-text font-semibold py-0.5">Buy Now</button>
        </div>
        </div>
      {/each}

    </div>
   
   
    {/if}








  
    




  {/await}



  
   


</div>


<div class="flex flex-col"> 
    
  <div class="h-12 w-12 my-1 "></div>

  <div class="h-28 w-64 ml-4 rounded-md bg-dark-backgroundPrimary">Price Range</div>
  <div class="h-48 w-64 ml-4 rounded-md bg-dark-backgroundPrimary mt-4">Colours</div>
  <div class="h-96 w-64 ml-4 mt-4 rounded-md bg-dark-backgroundPrimary">Type</div>

</div>


</main>
