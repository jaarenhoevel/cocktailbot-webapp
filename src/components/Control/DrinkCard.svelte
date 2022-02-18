<script>
    import { ingredients, drinks } from "stores/bot.js";

    export let drinkId = {};

    $: drink = $drinks?.[drinkId] || {};
</script>

<div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-100 border-0"
>
    <div class="rounded-t bg-white dark:bg-slate-900 mb-0 px-6 py-6">
        <div class="text-center flex justify-between">
            <h6 class="text-slate-700 dark:text-slate-300 text-xl font-bold">
                {drink.name || "Loading..."}
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
                            Name
                        </label>
                        <input
                            id="grid-username"
                            type="text"
                            class="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value={drink.name || ""}
                        />
                    </div>
                </div>
                <div class="w-full lg:w-6/12 px-4">
                    <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-slate-600 text-xs font-bold mb-2"
                            for="grid-email"
                        >
                            Proof
                        </label>
                        <input
                            id="grid-email"
                            type="email"
                            class="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            value="{drink.proof * 100 || 0}%"
                            disabled
                        />
                    </div>
                </div>
            </div>

            <hr
                class="mt-6 border-b-1 border-slate-300 dark:border-slate-700"
            />

            <h6 class="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
                Ingredients
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
                                Ingredient
                            </th>
                            <th
                                class="px-6 bg-slate-50 dark:bg-slate-800 text-slate-500 align-middle border border-solid border-slate-200 dark:border-slate-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                            >
                                Proof
                            </th>
                            <th
                                class="px-6 bg-slate-50 dark:bg-slate-800 text-slate-500 align-middle border border-solid border-slate-200 dark:border-slate-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"
                            >
                                Portion
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each drink.ingredients || [] as ingredient}
                            <tr class="dark:text-slate-300">
                                <th
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
                                >
                                    {$ingredients?.[ingredient.id]?.name || "Loading..."}
                                </th>
                                <td
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                >
                                    {$ingredients?.[ingredient.id]?.proof * 100 || 0}%
                                </td>
                                <td
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                                >
                                    <div class="flex items-center">
                                        <span class="mr-2">{ingredient.portion * 100}%</span>
                                        <div class="relative w-full">
                                            <div
                                                class="overflow-hidden h-2 text-xs flex rounded bg-red-200"
                                            >
                                                <div
                                                    style="width: {ingredient.portion * 100}%;"
                                                    class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
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

            <hr
                class="mt-6 border-b-1 border-slate-300 dark:border-slate-700"
            />

            <h6 class="text-slate-400 text-sm mt-3 mb-6 font-bold uppercase">
                Description
            </h6>
            <div class="flex flex-wrap">
                <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                        <label
                            class="block uppercase text-slate-600 text-xs font-bold mb-2"
                            for="grid-about-me"
                        >
                            About this drink
                        </label>
                        <textarea
                            id="grid-about-me"
                            type="text"
                            class="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            rows="4"
                            value="A beautiful UI Kit and Admin for Svelte & Tailwind CSS. It is Free
                and Open Source."
                        />
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
