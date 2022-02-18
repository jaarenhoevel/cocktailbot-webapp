<script>
    import DrinkSettingsCard from "components/Control/DrinkSettingsCard.svelte";
    import DrinkStatusCard from "components/Control/DrinkStatusCard.svelte";

    export let drinkId;
</script>

<div class="flex flex-wrap">
    <div class="w-full xl:w-8/12 px-4">
        <DrinkSettingsCard {drinkId} />
    </div>
    <div class="w-full xl:w-4/12 px-4">
        <DrinkStatusCard {drinkId} />
    </div>
  </div>