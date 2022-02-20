<script>
    import { status, reservoirs, ingredients, apiAddress } from "stores/bot.js";

    export let reservoirId;

    $: reservoir = $reservoirs?.[reservoirId] || {};

    const reservoirActionParams = {
        content: "",
        amount: "",
        refillTime: 10
    }

    async function patchReservoir(body = {}) {
        const result = await fetch(`${apiAddress}/reservoirs/${reservoirId}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }

    async function refillReservoir() {
        const result = await fetch(`${apiAddress}/reservoirs/${reservoirId}/refill`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                time: reservoirActionParams.refillTime
            })
        });
    }
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
                        <i class="text-white text-2xl fas fa-archive" />
                    </div>
                </div>
            </div>
            <div class="w-full px-4 text-center mt-20">
                <div class="flex justify-center py-4 lg:pt-4 pt-8">
                    <div class="mr-4 p-3 text-center">
                        <span
                            class="text-xl font-bold block tracking-wide text-slate-600"
                        >
                            {reservoir.amount === -1
                                ? "∞"
                                : reservoir.amount + "ml"}
                        </span>
                        <span class="text-sm text-slate-400">Available</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                        <span
                            class="text-xl font-bold block tracking-wide text-slate-600"
                        >
                            {reservoir.content
                                ? $ingredients?.[reservoir.content]?.name ||
                                  "Unknown"
                                : "Empty"}
                        </span>
                        <span class="text-sm text-slate-400">Ingredient</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-2">
            <h3
                class="text-xl font-semibold leading-normal mb-2 text-slate-700 mb-2"
            >
                Actions
            </h3>
        </div>
        <div class="mt-2 py-10 border-t border-slate-200">
            <div class="flex flex-wrap justify-center">
                <div class="w-full lg:w-9/12 px-4">
                    <label
                        class="block uppercase text-slate-600 text-xs font-bold mb-2"
                        for="reservoir-content"
                    >
                        Content
                    </label>
                    <div
                            class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
                            role="group"
                        >
                        <select
                            id="reservoir-content"
                            class="form-select appearance-none block w-full px-3 pr-10 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            bind:value={reservoirActionParams.content}
                        >
                            {#each Object.entries($ingredients) || [] as [ingredientId, ingredient]}
                                <option 
                                    value={ingredientId}
                                    selected={ingredientId === reservoir.content}
                                >
                                    {ingredient.name}
                                </option>
                            {/each}
                        </select>
                        <button
                            class="bg-slate-600 text-white rounded-r text-sm font-bold uppercase px-6 active:bg-slate-800 ease-linear transition-all duration-150"
                            on:click={() => {patchReservoir({content: reservoirActionParams.content || null})}}
                        >
                            Set
                        </button>
                    </div>
                </div>
                <div class="w-full lg:w-9/12 px-4 mt-6">
                    <label
                        class="block uppercase text-slate-600 text-xs font-bold mb-2"
                        for="reservoir-amount"
                    >
                        Amount
                    </label>
                    <div
                            class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
                            role="group"
                        >
                        <input
                            id="reservoir-amount"
                            type="number"
                            max={reservoir.size}
                            min="-1"
                            class="appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder={reservoir.amount}
                            bind:value={reservoirActionParams.amount}
                        />
                        <button
                            class="bg-slate-600 text-white rounded-r text-sm font-bold uppercase px-6 active:bg-slate-800 ease-linear transition-all duration-150"
                            on:click={() => {patchReservoir({amount: reservoirActionParams.amount || 0})}}
                        >
                            Set
                        </button>
                    </div>
                </div>
                <div class="w-full lg:w-9/12 px-4 mt-6">
                    <label
                        class="block uppercase text-slate-600 text-xs font-bold mb-2"
                        for="reservoir-refill"
                    >
                        Refill Time
                    </label>
                    <div
                            class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
                            role="group"
                        >
                        <input
                            id="reservoir-refill"
                            type="number"
                            class="appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            bind:value={reservoirActionParams.refillTime}
                        />
                        <button
                            class="bg-slate-600 text-white disabled:opacity-50 rounded-r text-sm font-bold uppercase px-6 active:bg-slate-800 ease-linear transition-all duration-150"
                            disabled={!$status.ready}
                            on:click={refillReservoir}
                        >
                            Refill
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
