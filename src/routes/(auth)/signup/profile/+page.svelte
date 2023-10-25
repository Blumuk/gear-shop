<script>
    import fleaImage from "$lib/bt.webp"
    import { Globe, Globe2, KeyRound, User } from "lucide-svelte";
    import { goto } from "$app/navigation";


</script>

<main class="flex flex-col items-center">

    <img class="w-16 h-16" src={fleaImage} alt="">
    <h1 class="font-firaSans text-xl text-dark-text mb-2">Create your profile</h1>
    <div class="h-9 w-90 flex flex-row my-4 shadow-md rounded-md"><div class="w-10 h-full bg-dark-backgroundSecondaryLight rounded-bl-md rounded-tl-md border-solid border border-dark-backgroundSecondaryLight flex flex-row items-center justify-center"><User color='#cfcfcf' /></div><input type="text" placeholder="Username" class="w-[21.5rem] h-9 outline-none rounded-tr-md rounded-br-md bg-dark-backgroundSecondary font-firaSans text-dark-text border-solid border-2 border-dark-backgroundSecondaryLight indent-2 placeholder-dark-disabled" ></div>
    <div class="h-9 w-90 flex flex-row mb-4 shadow-md rounded-md"><div class="w-10 h-full bg-dark-backgroundSecondaryLight rounded-bl-md rounded-tl-md border-solid border border-dark-backgroundSecondaryLight flex flex-row items-center justify-center"><Globe2 color='#cfcfcf' /></div><select name="Location"  class="w-[21.5rem] h-9 outline-none rounded-tr-md rounded-br-md bg-dark-backgroundSecondary font-firaSans text-dark-text border-solid border-2 border-dark-backgroundSecondaryLight indent-2 placeholder-dark-disabled" ><option value="GB">United Kingdom</option><option value="NL">Netherlands</option></select></div>
    <button class="text-dark-text bg-dark-brand1 mx-auto h-9 rounded-md shadow-sm hover:shadow-lg transition ease-linear duration-150  font-firaSans w-96 font-semibold" on:click={async () => {goto("/signup/payment")}}>Next</button>
    
  
</main>
