<script>
    import { link } from "svelte-routing";
    // core components
    let navbarOpen = false;
    function setNavbarOpen() {
        navbarOpen = !navbarOpen;
    }
</script>

<nav
    class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white dark:bg-slate-800 shadow"
>
    <div
        class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
        <div
            class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
        >
            <a
                use:link
                class="text-slate-700 dark:text-slate-200 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="/"
            >
                CocktailBot
            </a>
            <button
                class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                on:click={setNavbarOpen}
            >
                <i class="fas fa-bars dark:text-slate-200" />
            </button>
        </div>
        <div
            class="lg:flex flex-grow items-center {navbarOpen
                ? 'block'
                : 'hidden'}"
            id="example-navbar-warning"
        >
            <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li class="flex items-center">
                    <a
                        class="hover:text-slate-500 text-slate-700 dark:text-slate-300 px-3 py-2 flex items-center text-xs uppercase font-bold"
                        href="/"
                    >
                        <i
                            class="text-slate-400 far fa-file-alt text-lg leading-lg mr-2"
                        />
                        Docs
                    </a>
                </li>

                <li class="flex items-center">
                    <a
                        class="hover:text-slate-500 text-slate-700 dark:text-slate-300 px-3 py-2 flex items-center text-xs uppercase font-bold"
                        href="https://github.com/jaarenhoevel/cocktailbot-core"
                        target="_blank"
                    >
                        <i
                            class="text-slate-400 fab fa-github text-lg leading-lg mr-2"
                        />
                        GitHub
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
