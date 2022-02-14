<script>
    import { Router, Route } from "svelte-routing";

    import Sidebar from "../components/Sidebar.svelte";
    import ControlNavbar from "components/ControlNavbar.svelte";
    import HeaderStats from "components/HeaderStats.svelte";
    import ControlFooter from "components/ControlFooter.svelte";

    export let location = "";
</script>

<div>
    <Sidebar {location} />
    <div class="relative md:ml-64 bg-slate-100 dark:bg-slate-800">
        <ControlNavbar {location} />
        <HeaderStats />
        <div class="px-4 md:px-10 mx-auto w-full -m-24">
            <ControlFooter />    
        </div>
    </div>
</div>
