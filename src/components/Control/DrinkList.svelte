<script>
    import { onMount } from "svelte";
    import { apiAddress } from "../../stores/bot";

    import Dropdown from "components/Control/DrinkListDropdown.svelte";

    // default or accent color
    export let color = "accent";
    export let available = false;

    let drinks = {};

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
        ? 'bg-white'
        : 'bg-red-800 text-white'}"
>
    <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3
                    class="font-semibold text-lg {color === 'default'
                        ? 'text-slate-700'
                        : 'text-white'}"
                >
                    {available ? "Available " : ""}Drinks
                </h3>
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
                            ? 'bg-slate-50 text-slate-500 border-slate-100'
                            : 'bg-red-700 text-red-200 border-red-600'}"
                    >
                        Name
                    </th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
                        'default'
                            ? 'bg-slate-50 text-slate-500 border-slate-100'
                            : 'bg-red-700 text-red-200 border-red-600'}"
                    >
                        Ingredients
                    </th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
                        'default'
                            ? 'bg-slate-50 text-slate-500 border-slate-100'
                            : 'bg-red-700 text-red-200 border-red-600'}"
                    >
                        Proof
                    </th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
                        'default'
                            ? 'bg-slate-50 text-slate-500 border-slate-100'
                            : 'bg-red-700 text-red-200 border-red-600'}"
                    >
                        Status
                    </th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
                        'default'
                            ? 'bg-slate-50 text-slate-500 border-slate-100'
                            : 'bg-red-700 text-red-200 border-red-600'}"
                    >
                        Available Amount
                    </th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
                        'default'
                            ? 'bg-slate-50 text-slate-500 border-slate-100'
                            : 'bg-red-700 text-red-200 border-red-600'}"
                    />
                </tr>
            </thead>
            <tbody>
                {#each Object.values(drinks) as drink}    
                    <tr>
                        <th
                            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
                        >
                        <div
                            class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-slate-800"
                        >
                            <i class="fas fa-glass-whiskey"></i>
                        </div>
                            <span
                                class="ml-3 font-bold {color === 'default'
                                    ? 'text-slate-600'
                                    : 'text-white'}"
                            >
                                {drink.name}
                            </span>
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
                                        class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                                    >
                                        <div
                                            style="width: {(drink.available / 2000) * 100}%;"
                                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td
                            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
                        >
                            <div class="flex items-center">
                                <button
                                    class="bg-red-600 text-white active:bg-slate-600 disabled:opacity-50 text-sm font-bold uppercase px-1 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                    type="button"
                                >Make</button>
                                <Dropdown {color}/>
                            </div>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
