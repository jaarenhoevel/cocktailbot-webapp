<script>
    import { onMount } from "svelte";
    import { apiAddress } from "stores/bot.js";

    import Dropdown from "components/Control/DrinkListDropdown.svelte";

    // default or accent color
    export let color = "default";
    export let available = false;

    let drinks = {};

    let drinkFilter = "";

    onMount(async () => {
        try {
            const result = await fetch(`${apiAddress}/drinks${available ? "?available=1" : ""}`);
            drinks = await result.json();
        } catch (err) {

        };
    });
</script>

<div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded {color ===
    'default'
        ? 'bg-white dark:bg-slate-900'
        : 'bg-red-800 text-white'}"
>
    <div class="rounded-t mb-0 px-4 py-2 border-0">
        <div class="flex flex-wrap items-center">
            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3
                    class="py-3 float-left font-semibold text-lg {color === 'default'
                        ? 'text-slate-700 dark:text-slate-300'
                        : 'text-white'}"
                >
                    {available ? "Available " : ""}Drinks
                </h3>
                <button
                    class="float-right bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-4 ml-2 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                    type="button"
                    on:click={() => {drinkFilter = ""}}
                >
                    Clear
                </button>
                <input 
                    id="drink-list-filter"
                    type="text"
                    bind:value={drinkFilter}
                    class="float-right border-0 px-3 py-2 placeholder-slate-400 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150" 
                    placeholder="Filter drinks..."    
                />
            </div>
        </div>
    </div>
    <div class="block w-full overflow-x-auto">
        <!-- Projects table -->
        <table class="items-center w-full bg-transparent border-collapse">
            <thead>
                <tr>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
                        'default'
                            ? 'bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-100 dark:border-slate-700'
                            : 'bg-red-700 text-red-200 border-red-600'}"
                    >
                        Name
                    </th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
                        'default'
                            ? 'bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-100 dark:border-slate-700'
                            : 'bg-red-700 text-red-200 border-red-600'}"
                    >
                        Ingredients
                    </th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
                        'default'
                            ? 'bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-100 dark:border-slate-700'
                            : 'bg-red-700 text-red-200 border-red-600'}"
                    >
                        Proof
                    </th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
                        'default'
                            ? 'bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-100 dark:border-slate-700'
                            : 'bg-red-700 text-red-200 border-red-600'}"
                    >
                        Status
                    </th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
                        'default'
                            ? 'bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-100 dark:border-slate-700'
                            : 'bg-red-700 text-red-200 border-red-600'}"
                    >
                        Available Amount
                    </th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
                        'default'
                            ? 'bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-100 dark:border-slate-700'
                            : 'bg-red-700 text-red-200 border-red-600'}"
                    />
                </tr>
            </thead>
            <tbody>
                {#each Object.entries(drinks).filter(([ ,drink]) => drink.name.toLowerCase().indexOf(drinkFilter.toLowerCase()) !== -1) as [drinkId, drink]}    
                    <tr class="dark:text-slate-300">
                        <th
                            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
                        >
                        <div
                            class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-slate-700"
                        >
                            <i class="fas fa-glass-whiskey"></i>
                        </div>
                            <a
                                class="ml-3 font-bold {color === 'default'
                                    ? 'text-slate-600 dark:text-slate-200'
                                    : 'text-white'}"
                                href="/drinks/{drinkId}"
                            >
                                {drink.name}
                            </a>
                        </th>
                        <td
                            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                        >
                            {drink.ingredients.length}
                        </td>
                        <td
                            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                        >
                            {drink.proof * 100 || "0"}%    
                        </td>
                        <td
                            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                        >
                            <i class="fas fa-circle {(drink.available > 0) ? "text-green-500" : "text-red-500"} mr-2" /> {(drink.available > 0) ? "Available" : "Not available"}    
                        </td>
                        <td
                            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                        >
                            <div class="flex items-center">
                                <span class="mr-2">{drink.available}ml</span>
                                <div class="relative w-full">
                                    <div
                                        class="overflow-hidden h-2 text-xs flex rounded {drink.available > 250 ? "bg-green-200" : "bg-red-200"}"
                                    >
                                        <div
                                            style="width: {(drink.available / 2000) * 100}%;"
                                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center {drink.available > 250 ? "bg-green-500" : "bg-red-500"}"
                                        />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td
                            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
                        >
                            <Dropdown {color}/>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
