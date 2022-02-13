<script>
    import { Router, Route } from "svelte-routing";

    import Connect from "./views/Connect.svelte";
    import Control from "./layouts/Control.svelte";

    export let url = "";
  </script>
  
  <Router url="{url}">
    <Route path="/" component={Connect} />
    <Route path="/*control" component="{Control}" />
  </Router>