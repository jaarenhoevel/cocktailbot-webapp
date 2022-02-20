<script>
    import ReservoirSettingsCard from "components/Control/ReservoirSettingsCard.svelte";
    import ReservoirStatusCard from "components/Control/ReservoirStatusCard.svelte";

    export let reservoirId;
</script>

<div class="flex flex-wrap">
    <div class="w-full xl:w-8/12 px-4">
        <ReservoirSettingsCard {reservoirId} />
    </div>
    <div class="w-full xl:w-4/12 px-4">
        <ReservoirStatusCard {reservoirId} />
    </div>
  </div>