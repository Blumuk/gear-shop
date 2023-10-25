<script>
    /** @type {import('./$types').PageData} */
    export let data;
    const notRequired = "(Not Required)"
    import fleaImage from "$lib/bt.webp"
    import { GoogleAuthProvider } from "firebase/auth";
    import { Globe, Globe2, KeyRound, User, CreditCard, CalendarX2, Lock } from "lucide-svelte";
    import { goto } from "$app/navigation";
</script>

<main class="flex flex-col items-center">

    <img class="w-16 h-16" src={fleaImage} alt="">
    <div class="mb-2 flex flex-row items-center"><h1 class="font-firaSans text-xl text-dark-text">Add a payment card</h1><h2 class="mt-0.5 ml-2 text-dark-disabled">{notRequired}</h2></div>
    
    <div class="h-9 w-90 flex flex-row my-4 shadow-md rounded-md"><div class="w-10 h-full bg-dark-backgroundSecondaryLight rounded-bl-md rounded-tl-md border-solid border border-dark-backgroundSecondaryLight flex flex-row items-center justify-center"><CreditCard color='#cfcfcf' /></div><input type="text" placeholder="Card Number" class="w-[21.5rem] h-9 outline-none rounded-tr-md rounded-br-md bg-dark-backgroundSecondary font-firaSans text-dark-text border-solid border-2 border-dark-backgroundSecondaryLight indent-2 placeholder-dark-disabled" ></div>
    <div class="h-9 w-90 flex flex-row mb-4 shadow-md rounded-md"><div class="w-10 h-full bg-dark-backgroundSecondaryLight rounded-bl-md rounded-tl-md border-solid border border-dark-backgroundSecondaryLight flex flex-row items-center justify-center"><User color='#cfcfcf' /></div><input type="text" placeholder="Name on Card" class="w-[21.5rem] h-9 outline-none rounded-tr-md rounded-br-md bg-dark-backgroundSecondary font-firaSans text-dark-text border-solid border-2 border-dark-backgroundSecondaryLight indent-2 placeholder-dark-disabled" ></div>
    <div class="h-9 w-90 flex flex-row mb-4 shadow-md rounded-md"><div class="w-10 h-full bg-dark-backgroundSecondaryLight rounded-bl-md rounded-tl-md border-solid border border-dark-backgroundSecondaryLight flex flex-row items-center justify-center"><CalendarX2 color='#cfcfcf' /></div><input type="text" placeholder="Expiry Date" class="w-[21.5rem] h-9 outline-none rounded-tr-md rounded-br-md bg-dark-backgroundSecondary font-firaSans text-dark-text border-solid border-2 border-dark-backgroundSecondaryLight indent-2 placeholder-dark-disabled" ></div>
    <div class="h-9 w-90 flex flex-row mb-4 shadow-md rounded-md"><div class="w-10 h-full bg-dark-backgroundSecondaryLight rounded-bl-md rounded-tl-md border-solid border border-dark-backgroundSecondaryLight flex flex-row items-center justify-center"><Lock color='#cfcfcf' /></div><input type="text" placeholder="CVV" class="w-[21.5rem] h-9 outline-none rounded-tr-md rounded-br-md bg-dark-backgroundSecondary font-firaSans text-dark-text border-solid border-2 border-dark-backgroundSecondaryLight indent-2 placeholder-dark-disabled" ></div>
    <div class="w-96 h-9 flex flex-row"><button class="text-dark-text bg-dark-backgroundSecondary h-9 rounded-md shadow-sm hover:shadow-lg transition ease-linear duration-150  font-firaSans w-[11.5rem] font-semibold mr-2" on:click={async () => {goto("/signup/profile")}}>Back</button><button class="text-dark-text bg-dark-brand1 h-9 rounded-md shadow-sm hover:shadow-lg transition ease-linear duration-150  font-firaSans w-[11.5rem] font-semibold ml-2" on:click={async () => {goto("signup/payment")}}>Skip</button></div>
    
  
</main>
