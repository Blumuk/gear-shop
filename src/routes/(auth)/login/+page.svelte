<script>
    import { goto } from "$app/navigation";
    import { auth, db } from "$lib/firebase";
    import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
    import { doc, getDoc } from "firebase/firestore";
    import { Mail, KeyRound } from "lucide-svelte"
    import fleaImage from "$lib/bt.webp"
    import googleLogo from "$lib/googleLogo.png"
    import microsoftLogo from "$lib/microsoftLogo.png"


    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        const user = await signInWithPopup(auth, provider);

        //Check for User file
        const userDocSnap = await getDoc(doc(db, "users", user.user.uid));
        if (!userDocSnap.exists()) {goto("/signup/profile");} else {history.back();} 
        

    








    








        
    }

</script>

<main class="flex flex-col items-center">
    <img class="w-16 h-16" src={fleaImage} alt="">
    <h1 class="font-firaSans text-xl text-dark-text mb-2">Login to Fleagear</h1>
    <div class="h-9 w-90 flex flex-row my-4 shadow-md rounded-md"><div class="w-10 h-full bg-dark-backgroundSecondaryLight rounded-bl-md rounded-tl-md border-solid border border-dark-backgroundSecondaryLight flex flex-row items-center justify-center"><Mail color='#cfcfcf' /></div><input type="email" placeholder="Email" class="w-[21.5rem] h-9 outline-none rounded-tr-md rounded-br-md bg-dark-backgroundSecondary font-firaSans text-dark-text border-solid border-2 border-dark-backgroundSecondaryLight indent-2 placeholder-dark-disabled" ></div>
    <div class="h-9 w-90 flex flex-row mb-4 shadow-md rounded-md"><div class="w-10 h-full bg-dark-backgroundSecondaryLight rounded-bl-md rounded-tl-md border-solid border border-dark-backgroundSecondaryLight flex flex-row items-center justify-center"><KeyRound color='#cfcfcf' /></div><input type="password" placeholder="Password" class="w-[21.5rem] h-9 outline-none rounded-tr-md rounded-br-md bg-dark-backgroundSecondary font-firaSans text-dark-text border-solid border-2 border-dark-backgroundSecondaryLight indent-2 placeholder-dark-disabled" ></div>
    <button class="text-dark-text bg-dark-brand1 mx-auto h-9 rounded-md shadow-sm hover:shadow-lg transition ease-linear duration-150  font-firaSans w-96 font-semibold" on:click={async () => {}}>Login</button>
    <div class="w-80 h-0.5 bg-dark-backgroundSecondaryLight rounded-md shadow-sm mt-4"></div>
    <button class="text-dark-text bg-dark-backgroundSecondary mx-auto h-9 rounded-md shadow-sm hover:shadow-lg transition ease-linear duration-150  font-firaSans w-96 mt-4  flex flex-row items-center" on:click={async () => {await signInWithGoogle(); }}><img class="h-9" src={googleLogo}><span class="absolute mx-auto w-96 font-semibold">Login with Google</span></button>
    <button class="text-dark-text bg-dark-backgroundSecondary mx-auto h-9 rounded-md shadow-sm hover:shadow-lg transition ease-linear duration-150  font-firaSans w-96 mt-4  flex flex-row items-center" ><img class="h-6 ml-1.5" src={microsoftLogo}><span class="absolute mx-auto w-96 font-semibold">Login with Microsoft</span></button>
    <div class="font-firaSans text-dark-text mt-8">Don't have an account?<button class="ml-2 bg-gradient-to-r text-dark-brand1 font-semibold">Sign up here</button></div>
    <div class="font-firaSans text-dark-text">Forgot your password?<button class=" ml-2 bg-gradient-to-r text-dark-brand1 font-semibold">Reset here</button></div>

</main>
   