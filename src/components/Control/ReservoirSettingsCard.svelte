<script>
    import { reservoirs } from "stores/bot.js";

    export let reservoirId = {};

    $: reservoir = $reservoirs?.[reservoirId] || {};
</script>

<div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-100 border-0"
>
    <div class="rounded-t bg-white dark:bg-slate-900 mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
            <h6 class="text-slate-700 dark:text-slate-300 text-xl font-bold">
                Reservoir #{String(reservoirId).padStart(3, "0")}
            </h6>
            <button
                class="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
            >
                Edit
            </button>
        </div>
    </div>
    <div class="dark:bg-slate-900 flex-auto px-4 lg:px-10 py-10 pt-0">
        <form>
            <h6 class="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
                Basic Information
            </h6>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-slate-600 text-xs font-bold mb-2"
                            for="grid-username"
                        >
                            Size
                        </label>
                        <input
                            id="grid-username"
                            type="text"
                            class="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={reservoir.size || ""}
                        />
                    </div>
                </div>
            </div>

            <hr
                class="mt-6 border-b-1 border-slate-300 dark:border-slate-700"
            />

            <h6 class="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
                Valves
            </h6>
            <div class="flex flex-wrap">
                <table
                    class="items-center w-full bg-transparent border-collapse"
                >
                    <thead class="thead-light">
                        <tr>
                            <th
                                class="px-6 bg-slate-50 dark:bg-slate-800 text-slate-500 align-middle border border-solid border-slate-200 dark:border-slate-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                            >
                                Valve ID
                            </th>
                            <th
                                class="px-6 bg-slate-50 dark:bg-slate-800 text-slate-500 align-middle border border-solid border-slate-200 dark:border-slate-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                            >
                                Relay ID
                            </th>
                            <th
                                class="px-6 bg-slate-50 dark:bg-slate-800 text-slate-500 align-middle border border-solid border-slate-200 dark:border-slate-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"
                            >
                                Function
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each reservoir.valves || [] as valve, valveId}
                            <tr class="dark:text-slate-300">
                                <th
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                                >
                                    {valveId}
                                </th>
                                <td
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                >
                                    #{valve.relayId}
                                </td>
                                <td
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                >
                                    {valve.function}
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </form>
    </div>
</div>
