<script>
    import { Router, Route } from "svelte-routing";

    import Landing from "./views/Landing.svelte";
    import Control from "./layouts/Control.svelte";

    export let url = "";
  </script>
  
  <Router url="{url}">
    <Route path="/" component="{Landing}" />
    <Route path="control/*control" component="{Control}" />
  </Router>