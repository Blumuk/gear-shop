<script>
    import "../app.css";
    import bt from "..//lib/bt.webp"
  </script>



<main>
    <div class="w-full h-16 bg-slate-600 flex flex-row items-center">
        <img class="w-12 h-12 ml-2" src={bt} alt="">
        <h1 class="font-sans font-semibold text-xl ml-2 text-white">Gear Shop</h1>
        <input class="w-96 ml-auto h-7" type="text">
        <button class="h-7 w-7 bg-black mr-auto text-white">S</button>
        <div class="min-w-28 h-full bg-lime-200 flex flex-row items-center">
            <img class="w-11 h-11 ml-3 mr-3 rounded-full" src="https://machohairstyles.com/wp-content/uploads/2017/03/haircut-for-men-with-square-faces-9.jpg" alt="">
            <h6 class="mr-3">Username</h6>

        </div>

        
    </div>
    <slot></slot>
</main>