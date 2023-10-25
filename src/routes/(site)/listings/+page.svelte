<script>

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../lib/firebase"

const getListings = async () => {
    const q = query(collection(db, "items"));
    const querySnapshot = await getDocs(q);
    const listingArray = querySnapshot.docs.map(doc => doc.data())
    console.log(listingArray)
    return listingArray
}



</script>







<main class="flex w-full h-full flex-row items-center justify-center">
    <div class="h-full w-1/2  flex flex-col items-center py-8">


      {#await getListings()}

        <h1>loading</h1>


      {:then listingsArray}

        {#each listingsArray as listing}
          <div class="w-5/6 h-56 bg-dark-backgroundPrimary rounded-md shadow-md flex flex-row items-center">
            <img class="h-52 w-52 ml-2 object-cover rounded-md " src={listing.images[0]} alt="">
            <div class="flex flex-col h-full py-4 pl-4">
              <h1 class="font-semibold text-dark-text text-xl">{listing.name}</h1>
              <h2 class="font-medium text-dark-disabled text-ml ">{listing.brand}</h2>
              <h3 class="mx-auto my-auto font-medium text-dark-text text-2xl">£{listing.price}</h3>
              <button class="bg-dark-brand1 w-20 mx-auto mt-auto rounded-md text-dark-text font-semibold py-0.5">Buy Now</button>
            </div>
          
          </div>
          
        {/each}

      {/await}






    
    </div>
</main>
