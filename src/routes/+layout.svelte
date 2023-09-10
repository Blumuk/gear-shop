<script>
    import "../app.css";
    import bt from "..//lib/bt.webp"
  </script>



<main class="">
    <div class="w-full h-16 bg-slate-700 flex flex-row items-center shadow-md">
        <img class="w-12 h-12 ml-2" src={bt} alt="">
        <h1 class="font-sans font-semibold text-xl ml-2 text-white">Fleagear</h1>
        <input placeholder="Search for Gear..." class="w-96 ml-auto h-7 outline-none rounded-l-md shadow-md px-2" type="text">
        <button class="h-7 w-7 bg-slate-800 mr-auto text-white rounded-r-md shadow-md"></button>
        <div class="min-w-28 h-full flex flex-row items-center">
            <img class="w-11 h-11 ml-3 mr-3 rounded-full" src="https://machohairstyles.com/wp-content/uploads/2017/03/haircut-for-men-with-square-faces-9.jpg" alt="">
            <h6 class="font-sans font-semibold text-l mr-3 text-white">Username</h6>
        </div>
    </div>
    <slot class="h-full"></slot>
</main>