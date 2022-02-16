<script>
    import { Router, Route } from "svelte-routing";
    import { onMount } from "svelte";

    import Sidebar from "../components/Control/Sidebar.svelte";
    import Navbar from "components/Control/Navbar.svelte";
    import HeaderStats from "components/Control/HeaderStats.svelte";
    import Footer from "components/Control/Footer.svelte";
    import Dashboard from "../views/Control/Dashboard.svelte";
    import Drinks from "../views/Control/Drinks.svelte";

    export let location = "";
    export let control;

</script>

<div>
    <Sidebar {location} />
    <div class="relative md:ml-64 bg-slate-100 dark:bg-slate-800">
        <Navbar {location} />
        <HeaderStats />
        <div class="px-4 md:px-10 mx-auto w-full -m-24">
            <Router url={control}>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/drinks" component={Drinks} /> 
            </Router>
            <Footer />    
        </div>
    </div>
</div>
