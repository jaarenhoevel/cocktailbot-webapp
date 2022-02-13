<script>
    import { Router, Route } from "svelte-routing";

    import Sidebar from "../components/Sidebar.svelte";
    export let location = "";
</script>

<div>
    <Sidebar {location} />
    <div class="relative md:ml-64 bg-blueGray-100" />
</div>
