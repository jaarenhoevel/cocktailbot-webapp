<script>
    import { onDestroy } from "svelte";

    import CardStats from "components/Control/CardStats.svelte";

    export let bot;

    const interval = setInterval(getStatus, 2500);
    onDestroy(() => clearInterval(interval));

    async function getStatus() {
        try {
            const response = await fetch(`http://${bot.api.address}:${bot.api.port}/status`);
            const status = await response.json();

            statusMessage = (status.ready) ? "READY": "BUSY";
            currentDrink = bot.drinks[status.currentDrink] || "NONE";
            currentOutput = status.currentOutput || "NOT SET";
        } catch (err) {
            statusMessage = "NOT CONNECTED";
        }
    }

    let statusMessage = "CONNECTING...";
    let currentOutput = "DEFAULT";
    let currentDrink = "NONE";
    let temperature = "-°C";
</script>

<!-- Header -->
<div class="relative md:pt-32 pb-32 pt-12">
    <div class="px-4 md:px-10 mx-auto w-full">
        <div>
            <!-- Card stats -->
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardStats
                        statSubtitle="STATUS"
                        statTitle={statusMessage}
                        statIconName="fas fa-info"
                        statIconColor="bg-red-500"
                    />
                </div>
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardStats
                        statSubtitle="SELECTED OUTPUT"
                        statTitle={currentOutput}
                        statIconName="fas fa-random"
                        statIconColor="bg-orange-500"
                    />
                </div>
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardStats
                        statSubtitle="DRINK"
                        statTitle={currentDrink}
                        statIconName="fas fa-glass-whiskey"
                        statIconColor="bg-pink-500"
                    />
                </div>
                <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardStats
                        statSubtitle="Temperature"
                        statTitle={temperature}
                        statIconName="fas fa-thermometer-half"
                        statIconColor="bg-emerald-500"
                    />
                </div>
            </div>
        </div>
    </div>
</div>
