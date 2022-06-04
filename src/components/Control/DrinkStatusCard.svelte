<script>
    import { drinks, apiAddress } from "stores/bot.js";
    import { onDestroy } from "svelte";

    export let drinkId;

    const drinkSizes = {
        small: 100,
        medium: 200,
        large: 300
    }

    $: drink = $drinks?.[drinkId] || {};
    let drinkSize = localStorage.getItem("drink-size") || "small";

    let progress = -1;
    let progressInterval = null;

    async function makeDrink() {
        localStorage.setItem("drink-size", drinkSize);
        
        const result = await fetch(`${apiAddress}/drinks/${drinkId}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: drinkSizes[drinkSize] || 100
            })
        });

        const { processId } = await result.json();

        const fetchProcessStatus = async () => {
            try {
                const progressResult = await fetch(`${apiAddress}/processes/${processId}`);  
                const processStatus = await progressResult.json();
                
                if (processStatus.status === "running") progress = processStatus.progress || 0;
                else if (processStatus.status === "finished") {
                    clearInterval(progressInterval);
                    progress = -1;
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchProcessStatus();

        progressInterval = setInterval(fetchProcessStatus, 1000);
    }

    onDestroy(() => {
        if (progressInterval) clearInterval(progressInterval);
    });
</script>

<div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"
>
    <div class="px-6">
        <div class="flex flex-wrap justify-center">
            <div class="w-full px-4 flex justify-center">
                <div class="relative">
                    <div
                        class="bg-slate-700 shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 w-32 h-32 text-center inline-flex items-center justify-center"
                    >
                        <i class="text-white text-2xl fas fa-glass-whiskey" />
                    </div>
                </div>
            </div>
            <div class="w-full px-4 text-center mt-20">
                <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                        <span
                            class="text-xl font-bold block tracking-wide text-slate-600"
                        >
                            {drink.available || 0}ml
                        </span>
                        <span class="text-sm text-slate-400">Available</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                        <span
                            class="text-xl font-bold block tracking-wide text-slate-600"
                        >
                            {drink.ingredients?.length || 0}
                        </span>
                        <span class="text-sm text-slate-400">Ingredients</span>
                    </div>
                    <div class="lg:mr-4 p-3 text-center">
                        <span
                            class="text-xl font-bold block tracking-wide text-slate-600"
                        >
                            {drink.proof * 100 || 0}%
                        </span>
                        <span class="text-sm text-slate-400">Proof</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-12">
            <h3
                class="text-xl font-semibold leading-normal mb-2 text-slate-700 mb-2"
            >
                {drink.name || "Loading..."}
            </h3>
        </div>
        <div class="mt-10 py-10 border-t border-slate-200 text-center">
            <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-9/12 px-4">
                    <div class="flex items-center justify-center">
                        <div
                            class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
                            role="group"
                        >
                            <button
                                type="button"
                                class="rounded-l inline-block px-6 py-2.5 {drinkSize === "small" ? "bg-slate-800" : "bg-slate-600"} text-white font-medium text-xs leading-tight uppercase hover:bg-slate-700 focus:outline-none focus:ring-0 active:bg-slate-800 transition duration-150 ease-in-out"
                                on:click={() => {drinkSize = "small"}}
                                >Small</button
                            >
                            <button
                                type="button"
                                class="inline-block px-6 py-2.5 {drinkSize === "medium" ? "bg-slate-800" : "bg-slate-600"} text-white font-medium text-xs leading-tight uppercase hover:bg-slate-700 focus:outline-none focus:ring-0 active:bg-slate-800 transition duration-150 ease-in-out"
                                on:click={() => {drinkSize = "medium"}}
                                >Medium</button
                            >
                            <button
                                type="button"
                                class="rounded-r inline-block px-6 py-2.5 {drinkSize === "large" ? "bg-slate-800" : "bg-slate-600"} text-white font-medium text-xs leading-tight uppercase hover:bg-slate-700 focus:outline-none focus:ring-0 active:bg-slate-800 transition duration-150 ease-in-out"
                                on:click={() => {drinkSize = "large"}}
                                >Large</button
                            >
                        </div>
                    </div>

                    <button
                        class="mt-6 bg-red-500 text-white active:bg-red-600 disabled:opacity-50 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                        disabled={(!drink.available > 0) || (progress >= 0 && progress < 1)}
                        on:click={makeDrink}
                    >
                        <i class="text-white fas fa-circle-notch w-3 mr-2 animate-spin {progress < 0  || progress >= 1? "hidden" : ""}" />
                        {progress >= 0 && progress < 1 ? `Making drink... ${progress * 100}%` : `Make (${drinkSizes[drinkSize]}ml)`}
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
