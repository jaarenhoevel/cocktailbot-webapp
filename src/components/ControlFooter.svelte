<script>
    // make dynamic date to be added to footer
    let date = new Date().getFullYear();
</script>

<footer class="block py-4">
    <div class="container mx-auto px-4">
        <hr class="mb-4 border-b-1 border-slate-200 dark:border-slate-700" />
        <div
            class="flex flex-wrap items-center md:justify-between justify-center"
        >
            <div class="w-full md:w-4/12 px-4">
                <div
                    class="text-sm text-slate-500 font-semibold py-1 text-center md:text-left"
                >
                    Copyright © {date}
                    <a
                        href="https://github.com/jaarenhoevel"
                        class="text-slate-500 hover:text-slate-700 text-sm font-semibold py-1"
                    >
                        János Arenhövel
                    </a>
                </div>
            </div>
            <div class="w-full md:w-8/12 px-4">
                <ul
                    class="flex flex-wrap list-none md:justify-end justify-center"
                >
                    <li>
                        <a
                            href="https://www.creative-tim.com?ref=ns-footer-small"
                            class="text-slate-600 hover:text-slate-800 text-sm font-semibold block py-1 px-3"
                        >
                            Theme by CreativeTim
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
