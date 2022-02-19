<script>
    import { onMount } from "svelte";
    import { apiAddress, reservoirs, ingredients } from "stores/bot.js";

    // default or accent color
    export let color = "default";
</script>

<div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded {color ===
    'default'
        ? 'bg-white dark:bg-slate-900'
        : 'bg-red-800 text-white'}"
>
    <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3
                    class="font-semibold text-lg {color === 'default'
                        ? 'text-slate-700 dark:text-slate-300'
                        : 'text-white'}"
                >
                    Reservoirs
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
                            ? 'bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-100 dark:border-slate-700'
                            : 'bg-red-700 text-red-200 border-red-600'}"
                    >
                        ID
                    </th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
                        'default'
                            ? 'bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-100 dark:border-slate-700'
                            : 'bg-red-700 text-red-200 border-red-600'}"
                    >
                        Size
                    </th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
                        'default'
                            ? 'bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-100 dark:border-slate-700'
                            : 'bg-red-700 text-red-200 border-red-600'}"
                    >
                        Content
                    </th>
                    <th
                        class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
                        'default'
                            ? 'bg-slate-50 dark:bg-slate-900 text-slate-500 border-slate-100 dark:border-slate-700'
                            : 'bg-red-700 text-red-200 border-red-600'}"
                    >
                        Amount
                    </th>
                </tr>
            </thead>
            <tbody>
                {#each $reservoirs || [] as reservoir, id}
                    <tr class="dark:text-slate-300">
                        <th
                            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
                        >
                            <div
                                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-slate-700"
                            >
                                <i class="fas fa-archive" />
                            </div>
                            <a
                                class="ml-3 font-bold {color === 'default'
                                    ? 'text-slate-600 dark:text-slate-200'
                                    : 'text-white'}"
                                href="/reservoirs/{id}"
                            >
                                #{String(id).padStart(3, "0")}
                            </a>
                        </th>
                        <td
                            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                        >
                            {reservoir.size === -1
                                ? "∞"
                                : reservoir.size + "ml"}
                        </td>
                        <td
                            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                        >
                            {reservoir.content
                                ? $ingredients?.[reservoir.content]?.name ||
                                  "Unknown"
                                : "Empty"}
                        </td>
                        <td
                            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                        >
                            <div class="flex items-center">
                                <span class="mr-2">{reservoir.amount === -1 ? "∞" : reservoir.amount + "ml"}</span>
                                <div class="relative w-full">
                                    <div
                                        class="overflow-hidden h-2 text-xs flex rounded {reservoir.amount >
                                        250
                                            ? 'bg-green-200'
                                            : 'bg-red-200'}"
                                    >
                                        <div
                                            style="width: {(reservoir.amount /
                                                reservoir.size) *
                                                100}%;"
                                            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center {reservoir.amount >
                                            250
                                                ? 'bg-green-500'
                                                : 'bg-red-500'}"
                                        />
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
