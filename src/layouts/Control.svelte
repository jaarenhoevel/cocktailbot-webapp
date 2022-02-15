<script>
    import { Router, Route } from "svelte-routing";

    import Sidebar from "../components/Control/Sidebar.svelte";
    import Navbar from "components/Control/Navbar.svelte";
    import HeaderStats from "components/Control/HeaderStats.svelte";
    import Footer from "components/Control/Footer.svelte";

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
                <Route path="dashboard" component="Dashboard" />
            </Router>
            <Footer />    
        </div>
    </div>
</div>
