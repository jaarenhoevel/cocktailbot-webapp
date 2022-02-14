<script>
    import { link } from "svelte-routing";

    let collapseShow = "hidden";

    function toggleCollapseShow(classes) {
        collapseShow = classes;
    }

    export let location;
</script>

<nav
    class="dark:bg-slate-900 md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
>
    <div
        class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
        <!-- Toggler -->
        <button
            class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            on:click={() => toggleCollapseShow("bg-white m-2 py-3 px-6")}
        >
            <i class="fas fa-bars dark:text-white" />
        </button>
        <!-- Brand -->
        <a
            use:link
            class="md:block text-left md:pb-2 text-slate-600 dark:text-slate-200 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            href="/"
        >
            CocktailBot
        </a>
        <!-- User -->
        <ul class="md:hidden items-center flex flex-wrap list-none">
            <li class="inline-block relative" />
            <li class="inline-block relative" />
        </ul>
        <!-- Collapse -->
        <div
            class="dark:bg-slate-900 md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded {collapseShow}"
        >
            <!-- Collapse header -->
            <div
                class="md:min-w-full md:hidden block pb-4 mb-4 border-none border-solid border-slate-200 dark:border-slate-600"
            >
                <div class="flex flex-wrap">
                    <div class="w-6/12">
                        <a
                            use:link
                            class="md:block text-left md:pb-2 text-slate-600 dark:text-slate-200 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                            href="/"
                        >
                            CocktailBot
                        </a>
                    </div>
                    <div class="w-6/12 flex justify-end">
                        <button
                            type="button"
                            class="cursor-pointer text-black dark:text-white opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                            on:click={() => toggleCollapseShow("hidden")}
                        >
                            <i class="fas fa-times" />
                        </button>
                    </div>
                </div>
            </div>

            <!-- Divider -->
            <hr class="my-4 dark:border-slate-800 md:min-w-full" />
            <!-- Heading -->
            <h6
                class="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
            >
                Control
            </h6>
            <!-- Navigation -->

            <ul class="md:flex-col md:min-w-full flex flex-col list-none">
                <li class="items-center">
                    <a
                        use:link
                        href="/dashboard"
                        class="text-xs uppercase py-3 font-bold block {location.href.indexOf(
                            '/dashboard'
                        ) !== -1
                            ? 'text-red-500 hover:text-red-600'
                            : 'text-slate-700 dark:text-slate-400 hover:text-slate-500'}"
                    >
                        <i
                            class="fas fa-tv mr-2 text-sm {location.href.indexOf(
                                '/dashboard'
                            ) !== -1
                                ? 'opacity-75'
                                : 'text-slate-500'}"
                        />
                        Dashboard
                    </a>
                </li>

                <li class="items-center">
                    <a
                        use:link
                        href="/drinks"
                        class="text-xs uppercase py-3 font-bold block {location.href.indexOf(
                            '/drinks'
                        ) !== -1
                            ? 'text-red-500 hover:text-red-600'
                            : 'text-slate-700 dark:text-slate-400 hover:text-slate-500'}"
                    >
                        <i
                            class="fas fa-cocktail mr-2 text-sm {location.href.indexOf(
                                '/drinks'
                            ) !== -1
                                ? 'opacity-75'
                                : 'text-slate-500'}"
                        />
                        Drinks
                    </a>
                </li>

                <li class="items-center">
                    <a
                        use:link
                        href="/reservoirs"
                        class="text-xs uppercase py-3 font-bold block {location.href.indexOf(
                            '/reservoirs'
                        ) !== -1
                            ? 'text-red-500 hover:text-red-600'
                            : 'text-slate-700 dark:text-slate-400 hover:text-slate-500'}"
                    >
                        <i
                            class="fas fa-th mr-2 text-sm {location.href.indexOf(
                                '/reservoirs'
                            ) !== -1
                                ? 'opacity-75'
                                : 'text-slate-500'}"
                        />
                        Reservoirs
                    </a>
                </li>

                <li class="items-center">
                    <a
                        use:link
                        href="/statistics"
                        class="text-xs uppercase py-3 font-bold block {location.href.indexOf(
                            '/statistics'
                        ) !== -1
                            ? 'text-red-500 hover:text-red-600'
                            : 'text-slate-700 dark:text-slate-400 hover:text-slate-500'}"
                    >
                        <i
                            class="fas fa-list-ul mr-2 text-sm {location.href.indexOf(
                                '/statistics'
                            ) !== -1
                                ? 'opacity-75'
                                : 'text-slate-500'}"
                        />
                        Statistics
                    </a>
                </li>

                <li class="items-center">
                    <a
                        use:link
                        href="/power"
                        class="text-xs uppercase py-3 font-bold block {location.href.indexOf(
                            '/power'
                        ) !== -1
                            ? 'text-red-500 hover:text-red-600'
                            : 'text-slate-700 dark:text-slate-400 hover:text-slate-500'}"
                    >
                        <i
                            class="fas fa-power-off mr-2 text-sm {location.href.indexOf(
                                '/power'
                            ) !== -1
                                ? 'opacity-75'
                                : 'text-slate-500'}"
                        />
                        Power
                    </a>
                </li>
            </ul>

            <!-- Divider -->
            <hr class="my-4 md:min-w-full dark:border-slate-800" />
            <!-- Heading -->
            <h6
                class="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
            >
                Settings
            </h6>
            <!-- Navigation -->
            <ul class="md:flex-col md:min-w-full flex flex-col list-none">
                <li class="items-center">
                    <a
                        use:link
                        href="/setup"
                        class="text-xs uppercase py-3 font-bold block {location.href.indexOf(
                            '/setup'
                        ) !== -1
                            ? 'text-red-500 hover:text-red-600'
                            : 'text-slate-700 dark:text-slate-400 hover:text-slate-500'}"
                    >
                        <i
                            class="fas fa-tools mr-2 text-sm {location.href.indexOf(
                                '/setup'
                            ) !== -1
                                ? 'opacity-75'
                                : 'text-slate-500'}"
                        />
                        Setup
                    </a>
                </li>

                <li class="items-center">
                    <a
                        use:link
                        href="/management"
                        class="text-xs uppercase py-3 font-bold block {location.href.indexOf(
                            '/management'
                        ) !== -1
                            ? 'text-red-500 hover:text-red-600'
                            : 'text-slate-700 dark:text-slate-400 hover:text-slate-500'}"
                    >
                        <i
                            class="fas fa-database mr-2 text-sm {location.href.indexOf(
                                '/management'
                            ) !== -1
                                ? 'opacity-75'
                                : 'text-slate-500'}"
                        />
                        Database Management
                    </a>
                </li>
            </ul>
            
        </div>
    </div>
</nav>
