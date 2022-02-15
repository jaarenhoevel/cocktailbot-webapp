<script>
    import { onDestroy } from "svelte";
    import { status } from "../../stores/bot.js";

    import CardStats from "components/Control/CardStats.svelte";

    let statusMessage = "CONNECTING...";
    let currentOutput = "DEFAULT";
    let currentDrink = "NONE";
    let temperature = "-°C";

    const statusUnsubscribe = status.subscribe((s) => {
        if (Object.entries(s).length === 0) return statusMessage = "NOT CONNECTED";
        
        statusMessage = (s.ready) ? "READY": "BUSY";
        currentDrink = s.currentDrink || "NONE";
        currentOutput = s.currentOutput || "NOT SET";
    });

    onDestroy(statusUnsubscribe);
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
