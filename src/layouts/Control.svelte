<script>
    import { Router, Route } from "svelte-routing";
    import { onMount } from "svelte";

    import Sidebar from "../components/Control/Sidebar.svelte";
    import Navbar from "components/Control/Navbar.svelte";
    import HeaderStats from "components/Control/HeaderStats.svelte";
    import Footer from "components/Control/Footer.svelte";

    export let location = "";
    export let control;

    const bot = { 
        api: {
            address: localStorage.getItem("api-address") || "localhost",
            port: localStorage.getItem("api-port") || 8080
        },
        drinks: {},
        ingredients: {},
        config: {}
    }

    onMount(async () => {
        try {
            const drinkRequest = await fetch(`http://${bot.api.address}:${bot.api.port}/drinks`);
            bot.drinks = await drinkRequest.json();

            const ingredientRequest = await fetch(`http://${bot.api.address}:${bot.api.port}/ingredients`);
            bot.ingredients = await ingredientRequest.json();

            const configRequest = await fetch(`http://${bot.api.address}:${bot.api.port}/config`);
            bot.config = await configRequest.json();
        } catch (err) {
            console.log(err);
        }
    });
</script>

<div>
    <Sidebar {location} />
    <div class="relative md:ml-64 bg-slate-100 dark:bg-slate-800">
        <Navbar {location} />
        <HeaderStats {bot} />
        <div class="px-4 md:px-10 mx-auto w-full -m-24">
            <Router url={control}>
                
            </Router>
            <Footer />    
        </div>
    </div>
</div>
