<script>
    // make dynamic date to be added to footer
    let date = new Date().getFullYear();
</script>

<footer class="relative bg-slate-200 dark:bg-slate-900 pt-8 pb-6">
    <div
        class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
    >
        <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
        >
            <polygon
                class="text-slate-200 dark:text-slate-900 fill-current"
                points="2560 0 2560 101 0 101"
            />
        </svg>
    </div>
    <div class="container mx-auto px-4">
        <div class="flex flex-wrap text-center lg:text-left">
            <div class="w-full lg:w-6/12 px-4">
                <h4 class="text-3xl font-semibold dark:text-white">Share this project!</h4>
                <h5 class="text-lg mt-0 mb-2 text-slate-600 dark:text-slate-400">
                    Contribute on GitHub and help us find bugs.
                </h5>
                <div class="mt-6 lg:mb-0 mb-6">
                    <button
                        class="bg-white dark:bg-slate-800 text-red-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                    >
                        <i class="fas fa-home" />
                    </button>
                    <button
                        class="bg-white dark:bg-slate-800 text-slate-800 dark:text-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                    >
                        <i class="fab fa-github" />
                    </button>
                </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
                <div class="flex flex-wrap items-top mb-6">
                    <div class="w-full lg:w-4/12 px-4 ml-auto">
                        <span
                            class="block uppercase text-slate-500 dark:text-slate-200 text-sm font-semibold mb-2"
                        />
                        <ul class="list-unstyled" />
                    </div>
                    <div class="w-full lg:w-4/12 px-4">
                        <span
                            class="block uppercase text-slate-500 dark:text-slate-200 text-sm font-semibold mb-2"
                        >
                            Important Links
                        </span>
                        <ul class="list-unstyled">
                            <li>
                                <a
                                    class="text-slate-600 hover:text-slate-800 dark:text-slate-400 hover:dark:text-slate-200 font-semibold block pb-2 text-sm"
                                    href="/privacy_policy"
                                    target="_blank"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    class="text-slate-600 hover:text-slate-800 dark:text-slate-400 hover:dark:text-slate-200 font-semibold block pb-2 text-sm"
                                    href="/imprint"
                                    target="_blank"
                                >
                                    Imprint
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <hr class="my-6 border-slate-300 dark:border-slate-800" />
        <div
            class="flex flex-wrap items-center md:justify-between justify-center"
        >
            <div class="w-full md:w-8/12 px-4 mx-auto text-center">
                <div class="text-sm text-slate-500 dark:text-slate-600 font-semibold py-1">
                    Copyright © {date} János Arenhövel - <a href="https://www.creative-tim.com/product/notus-svelte">Notus Svelte by Creative Tim</a>
                </div>
            </div>
        </div>
    </div>
</footer>
